import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { API_URL } from "./.env";
import Post from "./components/Post";
import Header from "./components/header/Header";

const QUERY = `{
    posts {
      id
      slug
      title
      content
      creationDate
      coverPhoto{
        url
      }
      author {
        id
        nickname
        avatar{
            url
        }
      }
    }
  }`;

export const fetchData = async (setData) => {
    const { posts } = await request(API_URL, QUERY);

    setData(posts);
};

function App() {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        fetchData(setPosts);
    }, []);

    return (
        <div className="App">
            <Header />

            {posts &&
                posts.map((post) => (
                    <Post
                        title={post.title}
                        content={post.content}
                        key={post.id}
                    />
                ))}
        </div>
    );
}

export default App;

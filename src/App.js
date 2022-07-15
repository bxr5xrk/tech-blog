import React, { useEffect, useState } from "react";
import { request } from "graphql-request";
import { API_URL } from "./.env";

const QUERY = `{
    posts {
      id
      slug
      title
      content
      creationDate
      author {
        id
        nickname
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

    console.log(posts);
    return <div className="App"></div>;
}

export default App;

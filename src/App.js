import axios from "axios";
import React, { useEffect, useState } from "react";
import Footer from "./layout/Footer/Footer";
import Header from "./layout/Header/Header";

const url = `https://62d28fe981cb1ecafa622983.mockapi.io/blog/posts`;

export const getPosts = async (setPosts) => {
    const { data } = await axios.get(url);
    setPosts(data);
};

export const addPost = async (setPosts, posts, title, content) => {
    const post = {
        title,
        content,
        id: Date.now(),
    };

    await axios.post(url, post);

    setPosts(posts);
};

function App() {
    const [posts, setPosts] = useState({});

    useEffect(() => {
        getPosts(setPosts);
    }, [setPosts]);

    return (
        <div className="App">
            <Header />
            <h1>works</h1>
            <button
                variant="outlined"
                onClick={() => addPost(setPosts, posts, "title 3", "content 3")}
            >
                add
            </button>

            {posts.length > 0 &&
                posts.map((i) => <h3 key={i.id}>{i.title}</h3>)}
                <Footer />
        </div>
    );
}

export default App;

import React, { useEffect, useState } from "react";
import { getPosts } from "../../api/PostService";
import PostCard from "../PostCard/PostCard";
import st from "./PostList.module.css";

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts(setPosts);
    }, []);

    return (
        <>
            {/* <button
                onClick={() => addPost(setPosts, posts, "title 3", "content 3")}
            >
                add
            </button> */}
            <h1 className={st.title}>Posts</h1>
            <div className={st.posts}>
                {posts.length > 0 &&
                    posts.map((i) => (
                        <PostCard
                            key={i.id}
                            id={i.id}
                            title={i.title}
                            coverImageUrl={i.coverImageUrl}
                            content={i.content}
                        />
                    ))}
            </div>
        </>
    );
};

export default PostList;

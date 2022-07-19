// import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPosts } from "../../api/PostService";
import { getAllPosts, setPosts } from "../../store/slices/PostSlice";
import PostCard from "../PostCard/PostCard";
import st from "./PostList.module.css";

const PostList = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        getPosts().then((data) => dispatch(setPosts(data)));
    }, []);

    const posts = useSelector(getAllPosts);

    // console.log(format(new Date(), "dd.MM.yyyy"));
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
                    posts.map((item) => (
                        <PostCard
                            key={item.id}
                            id={item.id}
                            title={item.title}
                            coverImageUrl={item.coverImageUrl}
                            content={item.content}
                            creationDate={item.creationDate}
                        />
                    ))}
            </div>
        </>
    );
};

export default PostList;

import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../../api/PostService";
import st from "./PostItem.module.css";


const PostItem = () => {
    let { id } = useParams();
    const [post, setPost] = useState({});

    useState(() => {
        getPost(id, setPost)
    }, []);
    

    return (
        <article className={st.wrapper}>
            <img src={post.coverImageUrl} alt="coverImage" className={st.image} />
            <h1 className={st.title}>{post.title}</h1>
            <p className={st.content}>{post.content}</p>
        </article>
    );
};

export default PostItem;

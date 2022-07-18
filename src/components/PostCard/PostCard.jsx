import React from "react";
import { Link } from "react-router-dom";
import st from "./PostCard.module.css";

const PostCard = ({ id, title, content, coverImageUrl }) => {
    return (
        <Link to={`/post/${id}`}>
            <div className={st.post}>
                <img
                    src={coverImageUrl}
                    alt="coverImage"
                    className={st.image}
                />
                <h3 className={st.title}>{title}</h3>
                <h4 className={st.content}>{content.slice(0, 90) + '...'}</h4>
            </div>
        </Link>
    );
};

export default PostCard;

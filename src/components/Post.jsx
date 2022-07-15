import React from "react";

const Post = ({title, content}) => {

    return (
        <div className="wrapper">
            {title} {content}
        </div>
    )
}

export default Post
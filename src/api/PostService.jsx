import axios from "axios";
import { URL } from "../.config.js";

export const getPosts = async () => {
    const { data } = await axios.get(URL);
    return data;
};

export const getPost = async (id, setPost) => {
    const { data } = await axios.get(URL + `/${id}`);
    setPost(data);
};

export const findPosts = async (search, setPosts) => {
    const { data } = await axios.get(URL + `/?title=${search}`);
    setPosts(data);
};

export const addPost = async (setPosts, posts, title, content) => {
    const post = {
        title,
        content,
        id: Date.now(),
    };

    await axios.post(URL, post);

    setPosts(posts);
};

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // categoryId: 0,
    // sortType: { name: "за популярністю", sortProp: "rating" },
    // page: 1,
    posts: [],
};

// основна логіка
const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload;
        },
    },
});

export const { setPosts, setPost } = PostSlice.actions;

export const getAllPosts = (state) => state.PostSlice.posts;

export default PostSlice.reducer;

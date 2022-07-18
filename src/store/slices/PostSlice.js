import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    // categoryId: 0,
    // sortType: { name: "за популярністю", sortProp: "rating" },
    // page: 1,
    posts: [{}],
};

// основна логіка
const PostSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        // першим передається наявний стан, наступним дія
        // setCategoryId(state, action) {
        //     // прирівняти categoryId до змінної що введе юзер
        //     state.categoryId = action.payload;
        // },

        // setSortType(state, action) {
        //     state.sortType = action.payload;
        // },

        // onChangePage(state, action) {
        //     state.page = action.payload;
        // },
    },
});

// експортуємо функції
export const {  } = PostSlice.actions;

// та сам редюсер
export default PostSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    posts: [],
    status : 'idle',
}

const postSlice = createSlice({
    name: 'post',
    initialState,
    reducers: {
        fetchALLPost:(state, action) => {
            state.posts = action.payload
            state.status = 'succeed'
        },
        fetchUpdatePost: (state, action) => {
            state.posts = state.posts.map((post) => post.$id === action.payload.$id ? action.payload : post)
        },
        fetchAddPost: (state, action) => {
            state.posts = [...state.posts,action.payload]
        },
        fetchDeletePost: (state, action) => {
            state.posts = state.posts.filter((post) => post.$id !== action.payload.postId)
        },
    }
})

export const { fetchALLPost, fetchDeletePost, fetchAddPost, fetchUpdatePost } = postSlice.actions

export default postSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';

const newsSlice = createSlice({
    name: 'news',
    initialState: {
        articles: [],
        loading: false,
        error: null,
    },
    reducers: {
        fetchNewsStart(state) {
            state.loading = true;
            state.error = null;
        },
        fetchNewsSuccess(state, action) {
            state.loading = false;
            state.articles = action.payload;
        },
        fetchNewsFailure(state, action) {
            state.loading = false;
            state.error = action.payload;
        },
    },
});

export const { fetchNewsStart, fetchNewsSuccess, fetchNewsFailure } = newsSlice.actions;

export default newsSlice.reducer;

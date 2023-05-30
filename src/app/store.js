import { configureStore } from '@reduxjs/toolkit'
import newsReducer from '../features/news/newsSlice.js'

export default configureStore({
    reducer: {
        news: newsReducer,
    },
})
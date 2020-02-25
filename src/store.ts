import { configureStore } from '@reduxjs/toolkit'
import {posts} from './redux/posts'

const store = configureStore({
    reducer: {
        posts
    }
})

export default store
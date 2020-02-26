import { configureStore } from '@reduxjs/toolkit'
import {example} from './redux/example'

const store = configureStore({
    reducer: {
        example
    }
})

export type AppDispatch = typeof store.dispatch
export type AppState = ReturnType<typeof store.getState>

export default store
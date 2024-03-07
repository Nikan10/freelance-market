import { configureStore } from "@reduxjs/toolkit"

import userRducer from './userSlice'
import gigReducer from './gigSlice'
import orderReducer from './orderSlice'

export const store = configureStore({
    reducer: {
        user: userRducer,
        gig: gigReducer,
        order: orderReducer
    }
})

export default store;
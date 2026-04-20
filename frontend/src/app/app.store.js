import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../../src/features/auth/states/auth.slice.js'
import productReducer from '../../src/features/product/states/product.slice.js'

export const store  = configureStore({
    reducer: {
        auth: authReducer,
        product: productReducer,
    },
})

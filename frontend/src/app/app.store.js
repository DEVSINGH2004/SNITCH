import {configureStore} from '@reduxjs/toolkit'
import authReducer from '../../src/features/auth/states/auth.slice.js'

export const store  = configureStore({
    reducer: {
        auth: authReducer,
    },
})

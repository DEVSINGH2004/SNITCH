import {useDispatch } from 'react-redux';
import { setLoading, setUser, setError } from '../states/auth.slice.js';
import { handleRegister, handleLogin } from '../services/auth.api.js';
export const useAuth = () => {
    const dispatch = useDispatch();
    async function registerHook({fullname, email, password, contactNo, joinAsSeller}) {
        const data = await handleRegister({fullname, email, password, contactNo, joinAsSeller});
        console.log(data)
        dispatch(setUser(data.user))
    }
    async function loginHook({email, password}) {
        const data = await handleLogin({email, password});
        console.log(data)
        dispatch(setUser(data.user))
    }

    return {
        registerHook,
        loginHook,
    }
}

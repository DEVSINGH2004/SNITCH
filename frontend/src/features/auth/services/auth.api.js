import axios from 'axios'
const apiAuth = axios.create({
    baseURL: '/api/auth',
    withCredentials: true,
})

export const handleRegister = async ({fullname,email, password,contactNo,joinAsSeller=false}) => {
    const response  = await apiAuth.post('/register', {
        fullname,
        email,
        password,
        contactNo,
        joinAsSeller,
    })
    return response.data
}

export const handleLogin = async ({email, password}) => {
    const response  = await apiAuth.post('/login', {
        email,
        password,
    })
    return response.data
}
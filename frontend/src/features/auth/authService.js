import axios from 'axios'

const API_URL='/api/user/'

//Register
const register = async (userData)=>{
    const response =await axios.post(API_URL, userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}

//Login
const login = async (userData)=>{
    const response =await axios.post(API_URL + 'login', userData)
    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }
}
// Logout
const logout=()=>{
    localStorage.removeItem('user')
}

const authService ={
    register,
    logout,
    login,
}

export default authService
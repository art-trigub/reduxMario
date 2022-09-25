import axios from 'axios'

export default axios.create({
    baseURL: 'https://5f2588f7c85de200162931f8.mockapi.io/users/products',
    headers: { 'Content-Type': 'application/json' }
});
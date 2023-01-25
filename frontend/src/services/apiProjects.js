import axios from 'axios'

export default axios.create({
    baseURL: 'https://63d0bef1120b32bbe8ea3d0b.mockapi.io/projects',
    headers: { 'Content-Type': 'application/json' }
});
import axios from 'axios'

export default axios.create({
    baseURL: 'https://5f3a840a2300b100169a8d1d.mockapi.io/HealthInsurance',
    headers: { 'Content-Type': 'application/json' }
});
import axios from "axios"

export const getProducts = () => {
    try {
        const response = axios.get('https://dummyjson.com/products')
    } catch (error) {
        
    }
}
import axios from "axios"
import { BASE_URL } from "../constants/API"

export const fetchProducts = async () => {
    const response = await fetch(`${BASE_URL}products`)
    return response
}

export const fetchProduct = async (id) => {
    const response = await fetch(`${BASE_URL}products/${id}`)
    return response
}

export const createProduct = async (product) => {
    const response = await fetch(`${BASE_URL}products`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(product) 
    })
    return response
}

export const fetchCategories = async () => {
    const response = await fetch(`${BASE_URL}categories/`)
    return response
}

export const uploadFile = async (image) => {
    const response = await axios(`${BASE_URL}files/upload`, {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "multipart/form-data"
        },
        data: image
    })
    return response
}
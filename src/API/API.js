import axios from "axios"
import { ErrorCreator } from "../utiles"

const ENDPOINT = "http://localhost:8000/api/"

const productFetcher = async (request, point, params = []) => {
    let path = ENDPOINT + point + "/"

    if(params.length) {
        path += "?" + params.map(item => `${item.type}=${item.input}`).join('&')  
    }

    const response = await axios[request](path)
    return response.data
}

export default class API {
    static async getProduct(product, params) {
        try {
            const response = await productFetcher("get", product, params)
            return {status: true, response}
        }catch(e) {
            console.log("Error: ", e.message)
            return {status: false, data: null, error: e.message}
        }
    }
    static async send_notify(body) {
        try {
            const response = await axios.post(ENDPOINT + "contact_form/", body)
            return response.data
        }catch(e) {
            console.log("Error in form-message sending: ", e.message)
        }
    }
    static async getPartners() {
        try {
            const response = await axios.get(ENDPOINT + "partners/")
            return {status: 200, data: response.data}
        }catch(e) {
            return {status: e.code, statusText: e.message}
        }
    }
    static async getBanners() {
        try {
            const response = await axios.get(ENDPOINT + "banners/")
            return {status: 200, data: response.data}
        }catch(e) {
            return {status: e.code, statusText: e.message}
        }
    }
}


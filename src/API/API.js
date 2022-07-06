import axios from "axios"

const ENDPOINT = "http://localhost:8000/api/"

const fetcher = async (request, point, params = []) => {
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
            const response = await fetcher("get", product, params)
            return {status: true, response}
        }catch(e) {
            console.log("Error: ", e.message)
            return {status: false, data: null, error: e.message}
        }
    }
}


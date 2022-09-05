import { useEffect, useState, useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { makeGoodParams } from "../utiles";

export class ParamCreator {
    constructor(type, input) {
        this.type = type
        this.input = input
    }
}

export const useAddParams = () => {
    const navigate = useNavigate()
    let params = window.location.search 
    const add_params = (in_params = []) => {
        if(!params) {
            params += "?" + in_params.map(item => `${item.type}=${item.input}`).join('&')  
        }else {
            params += in_params.map(item => `${item.type}=${item.input}`).join('&')     
        }
    

        let path = window.location.pathname + "/" + params
        console.log('PATH: ', path)
        navigate(path)
    }

    return add_params
}


export const useGetParams = (page_callback = () => {}) => {
    const query = new URLSearchParams(window.location.search)
    let params = window.location.search 

    let [queryParams, setQueryParams] = useState([])

    useEffect(() => {
        const page = page_callback()

        const search = new ParamCreator("search", query.get('search'))
        const max_price = new ParamCreator('max_price', query.get('max_price'))
        const min_price = new ParamCreator('min_price', query.get('min_price')) 
        const sort =  new ParamCreator('sort', query.get('sort')) 
        const page_param = new ParamCreator('page', page)  

        setQueryParams([search, max_price, min_price, sort, page_param])
    }, [params])


    const result = queryParams.filter(item => item.input)
    return result
}
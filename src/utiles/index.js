
// LOCAL STORAGE

import { useLocation } from "react-router-dom"
import { navlist } from "../Components/Sticky_header/NavList/NavList"

export const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key))
export const removeLocalStorage = (key = "session") => localStorage.removeItem(key)
export const setLocalStorage = (value, key = "session") => localStorage.setItem(key, JSON.stringify(value))

// PATH


export const convertPathname = str => {
    let result = str.split('/')
    const handledNavList = [...navlist]
    handledNavList.shift()
    result.shift()
    result.forEach((item, j) => {
        handledNavList.forEach((link, i, array) => {
            if(item === link.path) {
                result.splice(j, 1, link.title)
            }else if(item === "search") {
                result.splice(j, 1, "поиск")
            }
        })
    })
    return result
}


// PRODUCT

export class ParamCreator {
    constructor(type, input) {
        this.type = type
        this.input = input
    }
}


export const titleConverterToItsPath = (product, to = "en") => {
    if(product === "search") {
        return "products"
    }else if(product === "search" && to === "ru") {
        return "поиск"
    }else if(product === "Поиск") {
        return "products"
    }
    return (
        to === "ru" ? 
    [...navlist].find(item => item.path === product).title 
        :
    [...navlist].find(item => item.title === product).path 
    )
}


export const makeGoodParams = arr => {
    const reversed = arr.reverse()
    let result = []
    reversed.forEach(item => {
        if(!result.some(el => el.type === item.type)) {
            result.push(item)
        }
    })
    return result
}



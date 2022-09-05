import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, resetActiveProduct, toggleProductLoading } from "../Store/reducers/productReducer"
import { convertPathname, titleConverterToItsPath } from "../utiles"
import { useGetParams } from "./useGetParams"


const useProductListHook = (product) => {
    const active = useSelector(state => state.products.active)
    const dispatch = useDispatch()
    const params = useGetParams()

    useEffect(() => {
      dispatch(getProduct(product, params))

      return () => dispatch(resetActiveProduct(titleConverterToItsPath(product, "ru")))
    }, [])

    return active
}

export default useProductListHook
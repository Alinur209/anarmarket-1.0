import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"
import { getProduct, resetActiveProduct, toggleProductLoading } from "../Store/reducers/productReducer"
import { convertPathname, titleConverterToItsPath } from "../utiles"


const useProductListHook = (product) => {
    const active = useSelector(state => state.products.active)
    const dispatch = useDispatch()

    useEffect(() => {
      dispatch(getProduct(product))

      return () => dispatch(resetActiveProduct())
    }, [])

    return active
}

export default useProductListHook
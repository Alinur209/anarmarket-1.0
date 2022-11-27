import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getProduct, resetActiveProduct } from "../Store/reducers/productReducer"

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
import { createProduct, getAllProducts } from "../services/product.api";
import { useDispatch } from "react-redux";
import { setSellerProducts } from "../states/product.slice";
export const useProduct = () => {
    const dispatch = useDispatch()
    const handleCreateProduct = async (formData) => {
        try {
            const response = await createProduct(formData)
            console.log(response)
            return response.data
        } catch (error) {
            console.log(error)
        }
    }
    const handleGetAllProducts = async () => {
        try {
            const response = await getAllProducts()
            console.log(response.products)
            dispatch(setSellerProducts(response.products))
        } catch (error) {
            console.log(error)
        }
    }
    return { handleCreateProduct, handleGetAllProducts }
}
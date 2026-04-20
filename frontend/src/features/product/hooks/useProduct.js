import { createProduct } from "../services/product.api";
import { useDispatch } from "react-redux";
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
    return { handleCreateProduct }
}
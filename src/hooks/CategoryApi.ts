import { api } from "../config/Axios";
import { Category } from "../types/category";

export const CategoryApi = () => ({
    get: async (): Promise<Category[]> => {
        const response = await api.get("category").catch(error => {
            throw new Error(error.response.data.message);
        });
        return response.data;
    }
})
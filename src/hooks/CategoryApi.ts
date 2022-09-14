import { api } from "../config/Axios";
import { Category } from "../types/category";

export const CategoryApi = () => ({
    get: async (): Promise<Category[]> => {
        const response = await api.get("category").catch(error => {
            throw new Error(error.response.data.message);
        });
        return response.data;
    },
    post: async(category: Category): Promise<number> => {
        const response = await api.post("category", category).then(res => {
            return res.status;
        }).catch(error => {
            console.log(error.response.data.message)
            throw new Error(error.response.data.message);
        })
        return response;
    },
    put: async(category: Category): Promise<number> => {
        const response = await api.put("category/" + category.id, category).then(res => {
            return res.status;
        }).catch(error => {
            console.log(error.response.data.message)
            throw new Error(error.response.data.message);
        })
        return response;
    },
    delete: async (category: Category): Promise<void> => {
        const response = await api.delete("Category/" + category.id).catch(error => {
            throw new Error(error.response.data.message);
        })
    }
})
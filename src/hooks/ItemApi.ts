import { api } from "../config/Axios";
import { Item } from '../types/item';

export type ItemInsert = {
    id?: string;
    date: string;
    idCategory: string;
    title: string;
    value: number;

}

export const ItemApi = () => ({
    get: async (): Promise<Item[]> => {
        const response = await api.get("item").then(res => {
            let items: Item[] = [];
            let responseItem: Item[] = res.data;
            responseItem.forEach((item: Item) => {
                item.date = new Date(item.date)
                items.push(item);
            })
            return res.data
        }).catch(error => {
            console.log(error);
            throw new Error(error);
        });
        return response;
    },
    delete: async (Item: Item): Promise<void> => {
        const response = await api.delete("item/" + Item.id)
    },
    post: async (iten: ItemInsert): Promise<number> => {
        const response = await api.post("item", iten).then(res => {
            return res.status;
        }).catch(error => {
            console.log(error.response.data.message)
            throw new Error(error.response.data.message);
        })
        return response;
    },
    put: async (iten: ItemInsert) => {
        const response = await api.put("item/" + iten.id, iten).then(res => {
            return res.data;
        }).catch(error => {
            console.log(error)
            throw new Error(error);
        })
        return response;
    }
})
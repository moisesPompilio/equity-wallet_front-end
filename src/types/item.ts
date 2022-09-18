import { category } from '../data/category';
export type Item = {
    id?: string;
    date: string;
    idCategory: category;
    title: string;
    value: number;

}
type category = {
    id: string;
    title: string;
    expense: boolean;
}
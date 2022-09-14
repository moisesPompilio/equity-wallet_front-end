import { useState } from "react";
import * as C from "./styles";
import { CategoryApi } from '../../hooks/CategoryApi';
import { Category } from "../../types/category";
import Button from "../Button";
import { UpdateCategory } from '../UpdateCategory/index';

type Props = {
    category: Category,
    getItens: () => void,
    getCategory: () => void,
}

export const InputCategoryInline = ({ category, getItens, getCategory }: Props) => {
    let deleteCategory = async () => {
        await CategoryApi().delete(category);
        getCategory();
        getItens();
    }
    const [update, setUpdate] = useState<boolean>(false);
    const invertUpdate = () => {
        setUpdate(!update);
    }
    return (
        <C.TableLine>
            <C.TableColumn >{category.title}</C.TableColumn>
            <C.TableColumn >
                {category.expense ? "Expenses" : "Earnings"}
            </C.TableColumn>
            <C.TableColumn >
                <Button label="Update" onClick={invertUpdate} />--
                <Button variant="secondary" label="Delete" onClick={deleteCategory} />
            </C.TableColumn>
            {update && <UpdateCategory getItens={getItens} category={category} getCategory={getCategory} invertUpdate={invertUpdate} />}
        </C.TableLine>
    )
}
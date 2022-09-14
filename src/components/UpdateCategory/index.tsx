import { useState } from "react";
import { CategoryApi } from "../../hooks/CategoryApi";
import { Category } from "../../types/category";
import Button from "../Button";
import * as C from "./styles";

type Props = {
    invertUpdate: () => void,
    category: Category,
    getItens: () => void,
    getCategory: () => void,
}

export const UpdateCategory = ({ invertUpdate, category, getItens, getCategory }: Props) => {
    const [type, setType] = useState<string>(category.expense.toString());
    const [title, setTitle] = useState<string>(category.title);
    const updateCategory = async () => {
        try {
            const update = await CategoryApi().put({ id: category.id, title, expense: (type == "true"? true : false) });
            if (update == 200) {
                getCategory()
                await getItens();
                invertUpdate();
            } else {
                alert("Erro in the Update Category")
            }
        } catch (error) {
            alert(error)
        }
    }

    return (
        <div>
            <C.Overlay ></C.Overlay>
            <C.Container>
                <C.Row >
                    <C.Title>Update Category</C.Title>
                </C.Row>
                <C.Row >
                    <C.Label>Title</C.Label>
                </C.Row>
                <C.Row>
                    <C.Input value={title} onChange={e => setTitle(e.target.value)} />
                </C.Row>
                <C.Row >
                    <C.Label>Type</C.Label>
                </C.Row>
                <C.Row>
                    <C.Select value={type} onChange={e => setType(e.target.value)}>
                        <option value="false">Earnings</option>
                        <option value="true">Expenses</option>
                    </C.Select>
                </C.Row>
                <C.Buttons>
                    <C.ButtonLeft>
                        <Button label="Update" size="large" onClick={updateCategory} />
                    </C.ButtonLeft>
                    <C.ButtonsRight>
                        <Button label="Cancelar" size="large" variant="secondary" onClick={invertUpdate} />
                    </C.ButtonsRight>
                </C.Buttons>
            </C.Container>
        </div>
    )
}
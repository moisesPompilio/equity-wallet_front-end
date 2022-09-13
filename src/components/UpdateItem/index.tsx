import { useState } from "react";
import { Category } from "../../types/category";
import { Item } from "../../types/item";
import Button from "../Button";
import * as C from "./styles";
import { FormatDateInput, FormatDate } from '../../helpers/dateFilter';
import { ItemApi, ItemInsert } from '../../hooks/ItemApi';

type Props = {
    invertUpdate: () => void,
    listCategory: Category[],
    item: Item,
    getItens: () => void,
}

export const UpdateItem = ({ invertUpdate, listCategory, item, getItens }: Props) => {
    let dateItem = new Date(item.date);
    const [date, setDate] = useState<string>(FormatDate(dateItem));
    const [title, setTitle] = useState<string>(item.title);
    const [value, setValue] = useState<number>(item.value);
    const [category, setCategory] = useState<string>(item.idCategory.id);
    const updateItem = async () => {
        let itemInsert = {
            id: item.id,
            date,
            value,
            title,
            idCategory: category
        }
        const update = await ItemApi().put(itemInsert);
        await getItens();
        invertUpdate()
    }

    return (
        <div>
            <C.Overlay ></C.Overlay>
            <C.Container>
                <C.Row >
                    <C.Title>Update Item</C.Title>
                </C.Row>
                <C.Row >
                    <C.Label>Date</C.Label>
                </C.Row>
                <C.Row>
                    <C.Input type="date" value={date} onChange={e => setDate(e.target.value)} />
                </C.Row>
                <C.Row >
                    <C.Label>Category</C.Label>
                </C.Row>
                <C.Row>
                    <C.Select value={category} onChange={e => setCategory(e.target.value)}>
                        {listCategory.map((object, index) => {
                            return (
                                <option key={index} value={object.id}>{object.title}</option>
                            )
                        })}
                    </C.Select>
                </C.Row>
                <C.Row >
                    <C.Label>Title</C.Label>
                </C.Row>
                <C.Row>
                    <C.Input value={title} onChange={e => setTitle(e.target.value)} />
                </C.Row>
                <C.Row >
                    <C.Label>Value</C.Label>
                </C.Row>
                <C.Row>
                    <C.Input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))} />
                </C.Row>
                <C.Buttons>
                    <C.ButtonLeft>
                        <Button label="Update" size="large" onClick={updateItem} />
                    </C.ButtonLeft>
                    <C.ButtonsRight>
                        <Button label="Cancelar" size="large" variant="secondary" onClick={invertUpdate} />
                    </C.ButtonsRight>
                </C.Buttons>
            </C.Container>
        </div>
    )
}
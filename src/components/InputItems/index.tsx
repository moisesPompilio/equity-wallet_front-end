import * as C from "./styles";
import { useState } from 'react';
import { Category } from '../../types/category';
import { FormatDate } from "../../helpers/dateFilter";
import Button from "../Button";
import { ItemApi } from "../../hooks/ItemApi";
type Props = {
    listCategory: Category[],
    getItens: () => void,
}
export const InputItems = ({ listCategory, getItens }: Props) => {
    let dateItem = new Date();
    const [date, setDate] = useState<string>(FormatDate(dateItem));
    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<number>(0);
    let idCategory = listCategory[0].id || "";
    const [category, setCategory] = useState<string>(idCategory);
    const [inputItems, setInputItems] = useState<boolean>(false);
    const invertInputItems = () => {
        setInputItems(!inputItems);
    }
    const SaveItem = async () => {
        let itemInsert = {
            date,
            value,
            title,
            idCategory: category
        }
        console.log(itemInsert);
        try {
            const save = await ItemApi().post(itemInsert);
            if (save == 201) {
                getItens();
                CleanFields();
            } else {
                alert("Error saving item! Complete all the fields correctly");
            }
        } catch (error) {
            alert(error)
        }


    }
    const CleanFields = () => {
        setDate(FormatDate(dateItem));
        setTitle("");
        setValue(0);
        setCategory(idCategory);
    }

    return (
        <C.Table>
            <thead>
                <C.TableHeadColum >Date</C.TableHeadColum>
                <C.TableHeadColum >Category</C.TableHeadColum>
                <C.TableHeadColum >Title</C.TableHeadColum>
                <C.TableHeadColum >Value</C.TableHeadColum>
                <C.TableHeadColum >Action</C.TableHeadColum>
            </thead>
            <tbody>
                <C.TableLine>
                    <C.TableColumn ><C.Input type="date" value={date} onChange={e => setDate(e.target.value)} /></C.TableColumn>
                    <C.TableColumn >
                        <C.Select value={category} onChange={e => setCategory(e.target.value)}>
                            {listCategory.map((object, index) => {
                                return (
                                    <option key={index} value={object.id}>{object.title}</option>
                                )
                            })}
                        </C.Select>
                    </C.TableColumn>
                    <C.TableColumn ><C.Input value={title} onChange={e => setTitle(e.target.value)} /></C.TableColumn>
                    <C.TableColumn ><C.Input type="number" value={value} onChange={e => setValue(parseFloat(e.target.value))} /></C.TableColumn>
                    <C.TableColumn ><Button label="Save" onClick={SaveItem} />--
                        <Button variant="secondary" label="Clean" onClick={CleanFields} /></C.TableColumn>
                </C.TableLine>
            </tbody>
        </C.Table>
    )
}
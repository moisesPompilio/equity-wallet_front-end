import { Category } from "../../types/category";
import { useState } from 'react';
import * as C from "./styles";
import Button from "../Button";
import { Title } from '../InputArea/styles';

type Props = {
    listCategory: Category[],
    getItens: () => void,
}
export const InputCategory = ({ listCategory, getItens }: Props) => {
    const [title, setTitle] = useState<string>("");
    const [value, setValue] = useState<number>(0);
    const [type, setType] = useState<string>("false");
    const [inputItems, setInputItems] = useState<boolean>(false);
    const invertInputItems = () => {
        setInputItems(!inputItems);
    }
    const SaveItem = async () => {

        try {
            const save = 201
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
        setTitle("");
        setType("false");
    }

    return (
        <C.Table>
            <thead>
                <C.TableHeadColum >Title</C.TableHeadColum>
                <C.TableHeadColum >Type</C.TableHeadColum>
                <C.TableHeadColum >Action</C.TableHeadColum>
            </thead>
            <tbody>
                <C.TableLine>
                    <C.TableColumn ><C.Input value={title} onChange={e => setTitle(e.target.value)} /></C.TableColumn>
                    <C.TableColumn >
                        <C.Select value={type} onChange={e => setType(e.target.value)}>
                            <option value="false">Earnings</option>
                            <option value="true">Expenses</option>
                        </C.Select>
                    </C.TableColumn>
                    <C.TableColumn >
                        <Button label="Save" onClick={SaveItem} />--
                        <Button variant="secondary" label="Clean" onClick={CleanFields} /></C.TableColumn>
                </C.TableLine>
                {listCategory.map((object, index) => {
                    return (
                        <C.TableLine key={index}>
                            <C.TableColumn >{object.title}</C.TableColumn>
                            <C.TableColumn >
                                {object.expense? "Expenses": "Earnings"}
                            </C.TableColumn>
                            <C.TableColumn >
                                <Button label="Update" onClick={SaveItem} />--
                                <Button variant="secondary" label="Delete" onClick={CleanFields} /></C.TableColumn>
                        </C.TableLine>
                    )
                })}
            </tbody>
        </C.Table>
    )
}
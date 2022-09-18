import { Category } from "../../types/category";
import { useState } from 'react';
import * as C from "./styles";
import Button from "../Button";
import { UpdateItem } from '../UpdateItem/index';
import { InputCategoryInline } from '../InputCategoryInline/index';
import { CategoryApi } from "../../hooks/CategoryApi";

export type InputCategoryProps = {
    listCategory: Category[],
    getItens: () => void,
    getCategory: () => void,
}
export const InputCategory = ({ listCategory, getItens, getCategory }: InputCategoryProps) => {
    const [title, setTitle] = useState<string>("");
    const [type, setType] = useState<string>("false");
    const SaveCategory = async () => {
        try {
            const save = await CategoryApi().post({title, expense: (type == "true")})
            if (save == 201) {
                getItens();
                await getCategory();
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
                        <Button label="Save" onClick={SaveCategory} />--
                        <Button variant="secondary" label="Clean" onClick={CleanFields} /></C.TableColumn>
                </C.TableLine>
                {listCategory.map((object, index) => {
                    return (
                        <InputCategoryInline key={index} getItens={getItens} getCategory={getCategory} category={object} />
                    )
                })}
            </tbody>
        </C.Table>
    )
}
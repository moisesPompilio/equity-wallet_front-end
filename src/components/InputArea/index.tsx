import { Category } from "../../types/category"
import * as C from "./styles";
import { useEffect, useState } from 'react';
import { InputItems } from "../InputItems";
import { InputCategory } from '../InputCategory/index';

type Props = {
    listCategory: Category[],
    getItens: () => void,
}
export const InputArea = ({ listCategory, getItens }: Props) => {
    const [inputItems, setInputItems] = useState<boolean>(false);
    const invertInputItems = () =>{
        setInputItems(!inputItems);
    }
    const [inputCategory, setInputCategory] = useState<boolean>(false);
    const invertInputCategory = () =>{
        setInputCategory(!inputCategory);
    }
    return (
        <C.Container>
            <C.IputSpace>
                <C.Title onClick={invertInputCategory}> Category Info ☰</C.Title>
                {inputCategory && <InputCategory getItens={getItens} listCategory={listCategory} />}
            </C.IputSpace>
            <C.IputSpace>
                <C.Title onClick={invertInputItems}> Add Item +</C.Title>
                {inputItems && <InputItems getItens={getItens} listCategory={listCategory} />}
            </C.IputSpace>
        </C.Container>
    )
}
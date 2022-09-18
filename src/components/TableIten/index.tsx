import { useState } from "react"
import { category } from "../../data/category"
import { FormatDate } from "../../helpers/dateFilter"
import { ItemApi } from "../../hooks/ItemApi"
import { Category } from "../../types/category"
import { Item } from "../../types/item"
import Button from "../Button"
import { UpdateItem } from "../UpdateItem"
import * as C from "./styles"

export type TableItenProps = {
    iten: Item,
    getItens: () => void,
    listCategory: Category[],
}

export const TableIten = ({ iten, getItens, listCategory }: TableItenProps) => {
    let dateItem = new Date(iten.date);
    let deleteItem = async () => {
        await ItemApi().delete(iten);
        getItens();
    }
    const [update, setUpdate] = useState<boolean>(false);
    const invertUpdate = () => {
        setUpdate(!update);
    }
    return (
        <C.TableLine>
            <C.TableColumn>{FormatDate(dateItem)}</C.TableColumn>
            <C.TableColumn><C.Category expense={iten.idCategory.expense}>{iten.idCategory.title}</C.Category></C.TableColumn>
            <C.TableColumn>{iten.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value expense={iten.idCategory.expense}>
                    ${iten.value}
                </C.Value>
            </C.TableColumn>
            <C.TableColumn>
                <Button label="Update" onClick={invertUpdate} />--
                <Button variant="secondary" label="Delete" onClick={deleteItem} />
            </C.TableColumn>
            {update && <UpdateItem item={iten} invertUpdate={invertUpdate} listCategory={listCategory} getItens={getItens}/>}

        </C.TableLine>
    )
}
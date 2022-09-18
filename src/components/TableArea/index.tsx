import { Category } from "../../types/category";
import { Item } from "../../types/item";
import { TableIten } from "../TableIten";
import * as C from "./styles";

export type TableAreaProps = {
    list: Item[];
    getItens: () => void;
    listCategory: Category[];
}

export const TableArea = ({ list, getItens, listCategory }: TableAreaProps) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColum width={110}>Date</C.TableHeadColum>
                    <C.TableHeadColum width={130}>Category</C.TableHeadColum>
                    <C.TableHeadColum >Title</C.TableHeadColum>
                    <C.TableHeadColum >Value</C.TableHeadColum>
                    <C.TableHeadColum width={150}>Action</C.TableHeadColum>
                </tr>
            </thead>
            <tbody>
                {list.map((iten, index) => {
                    return (
                        <TableIten key={index} iten={iten} getItens={getItens} listCategory={listCategory}/>
                    )
                })}
            </tbody>
        </C.Table>
    )
}
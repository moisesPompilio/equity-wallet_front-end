import { Iten } from "../../types/itens";
import { TableIten } from "../TableIten";
import * as C from "./styles";

type Props = {
    list: Iten[]
}

export const TableArea = ({ list }: Props) => {
    return (
        <C.Table>
            <thead>
                <tr>
                    <C.TableHeadColum width={110}>Date</C.TableHeadColum>
                    <C.TableHeadColum width={130}>Category</C.TableHeadColum>
                    <C.TableHeadColum >Title</C.TableHeadColum>
                    <C.TableHeadColum width={150}>Value</C.TableHeadColum>
                </tr>
            </thead>
            <tbody>
                {list.map((iten, index) => {
                    return (
                        <TableIten key={index} iten={iten}/>
                    )
                })}
            </tbody>
        </C.Table>
    )
}
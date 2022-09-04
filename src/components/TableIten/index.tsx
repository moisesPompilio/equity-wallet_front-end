import { category } from "../../data/category"
import { FormatDate } from "../../helpers/dateFilter"
import { Iten } from "../../types/itens"
import * as C from "./styles"

type Props = {
    iten: Iten
}

export const TableIten = ({ iten }: Props) => {
    return (
        <C.TableLine>
            <C.TableColumn>{FormatDate(iten.date)}</C.TableColumn>
            <C.TableColumn><C.Category expense={category[iten.category].expense}>{category[iten.category].title}</C.Category></C.TableColumn>
            <C.TableColumn>{iten.title}</C.TableColumn>
            <C.TableColumn>
                <C.Value expense={category[iten.category].expense}>
                ${iten.value}
                </C.Value>
            </C.TableColumn>
        </C.TableLine>
    )
}
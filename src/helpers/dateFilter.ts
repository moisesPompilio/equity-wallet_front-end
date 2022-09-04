import { Iten } from "../types/itens";

export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth() + 1}`;
};

export const FilterListByMonth = (list: Iten[], date: string): Iten[] => {
    let newList: Iten[] = [];
    let [year, month] = date.split("-");

    newList = list.filter(iten => {
        return (
            iten.date.getFullYear() === parseInt(year)
            &&
            iten.date.getMonth() === (parseInt(month) - 1)
        )? iten : null;
    })

    return newList;
};

export const FormatDate = (date: Date) : string => {
   let year = date.getFullYear(),
       month = (date.getMonth() + 1).toString().padStart(2, '0'),
       day = (date.getDate()).toString().padStart(2, '0');

    return`${year}-${month}-${day}`;
};

export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split("-");
    let date = new Date(parseInt(year), (parseInt(month) - 1), 1);
    const monthNameLong = date.toLocaleString("en-US", { month: "long" });
    return`${monthNameLong} ${year}`;
};
import { formatCurrentMonth } from "../../helpers/dateFilter";
import { ResumeItem } from "../ResumeItem";
import * as C from "./styles";

export type InfoAreaProps = {
    currentMonth: string;
    onMonthChange: (newMonth: string) => void;
    income: number;
    expense: number;
};


export const InfoArea = ({ currentMonth, onMonthChange, income, expense }: InfoAreaProps) => {
    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split("-"),
            currentDate = new Date(parseInt(year), (parseInt(month) - 1), 1);
        currentDate.setMonth(currentDate.getMonth() - 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    const handleNextMonth = () => {
        let [year, month] = currentMonth.split("-"),
            currentDate = new Date(parseInt(year), (parseInt(month) - 1), 1);
        currentDate.setMonth(currentDate.getMonth() + 1);
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth() + 1}`);
    }
    return (
        <C.Container>
            <C.MonthArea>
                <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
                <C.MonthTitle>{formatCurrentMonth(currentMonth)}</C.MonthTitle>
                <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
            </C.MonthArea>
            <C.ResumeArea>
                <ResumeItem title="Income" value={income} />
                <ResumeItem title="Expense" value={-expense} />
                <ResumeItem title="Balance" value={Math.floor((income - expense) * 100) / 100} />
            </C.ResumeArea>
        </C.Container>
    )
}
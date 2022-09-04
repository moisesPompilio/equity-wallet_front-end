//import {Link, Outlet} from "react-router-dom";
//import Navbar from "./components/Navbar";

import { useState, useEffect } from 'react';

import * as C from './styles/app.styles'
import Button from './components/Button'
import { Category } from "./types/category";
import { Iten } from "./types/itens";
import { category } from "./data/category";
import { itens } from "./data/itens";
import { FilterListByMonth, getCurrentMonth } from "./helpers/dateFilter";
import { TableArea } from './components/TableArea';
import { InfoArea } from './components/InfoArea';

function App() {
  const [list, setList] = useState(itens);
  const [filteredLister, setFilteredLister] = useState<Iten[]>([])
  const [currentMonth, setCurrentMounth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredLister(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    console.log("aquii")
    filteredLister.forEach(item => {
      if (category[item.category].expense) {
        expenseCount += item.value;
      } else {
        incomeCount += item.value;
      }
    })
    setIncome((Math.floor(incomeCount * 100) / 100));
    setExpense((Math.floor(expenseCount * 100) / 100));
  }, [filteredLister]);

  const handleMonthChange = (newMonth: string) => {
    setCurrentMounth(newMonth);
  };

  return (
    <C.Container>
      <C.Header>
        <C.HeaderText>Sistema Finaceiro</C.HeaderText>
      </C.Header>
      <C.Body>
        <InfoArea
          income={income}
          expense={expense}
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <TableArea list={filteredLister} />
      </C.Body>
    </C.Container>
  )
}

export default App

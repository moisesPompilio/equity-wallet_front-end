//import {Link, Outlet} from "react-router-dom";
//import Navbar from "./components/Navbar";

import { useState, useEffect } from 'react';

import * as C from './styles'
import { Category } from "../../types/category";
import { Item } from "../../types/item";
import { FilterListByMonth, getCurrentMonth } from "../../helpers/dateFilter";
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { CategoryApi } from '../../hooks/CategoryApi';
import { ItemApi } from '../../hooks/ItemApi';

function Home() {
  const categoryApi = CategoryApi();
  const itemsApi = ItemApi();
  const [listCategory, setListCategory] = useState<Category[]>([]);
  const [list, setList] = useState<Item[]>([]);
  const [filteredLister, setFilteredLister] = useState<Item[]>([]);
  const [currentMonth, setCurrentMounth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    getItens();
    getCategory();
  }, []);

  useEffect(() => {
    setFilteredLister(FilterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;
    filteredLister.forEach(item => {
      if (item.idCategory.expense) {
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
  const getCategory = async () =>{
    setListCategory((await categoryApi.get()));
  }
  const getItens = async () => {
    setList((await itemsApi.get()))
  }

  return (
    <C.Container>
      <C.Body>
        <InfoArea
          income={income}
          expense={expense}
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
        />
        <TableArea list={filteredLister} getItens={getItens} listCategory={listCategory}/>
      </C.Body>
    </C.Container>
  )
}

export default Home

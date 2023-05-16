import React, { useState } from 'react'
import ExpenseItem from "./ExpenseItem"
import Card from "../UI/Card";
import "./Expenses.css"
import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";
import ExpenseList from './ExpenseList';
import ExpenseChart from "./ExpenseChart"

const Expenses = props => {
    let [year, setYear] = useState('2020')
    const selectChangeHandler = (selectedYear) => {
        console.log(selectedYear)
        setYear(selectedYear)
        // props.onSelectedYearChange(selectedYear)
    }
    const filteredExpenses = props.data.filter(expense => expense.date.getFullYear().toString() === year)
    
    return (
        <Card className="expenses">
            <ExpenseFilter
                selected={year}
                onSelectChange={selectChangeHandler}
            />
            <ExpenseChart expenses={filteredExpenses}/>
            <ExpenseList items={filteredExpenses}/>
        </Card>
    );
}

export default Expenses;
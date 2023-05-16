import { useState } from 'react';
import './ExpenseForm.css'

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = useState('')
    const [enteredAmount, setEnteredAmount] = useState('')
    const [enteredDate, setEnteredDate] = useState('')
    // const [showForm, setShowForm] = useState(false)
    
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // })

    // const titleChangeHandler = event => setUserInput((prevState) => ({ ...prevState, enteredTitle: event.target.value }))

    // const amountChangeHandler = event => setUserInput((prevState) => ({ ...prevState, enteredAmount: event.target.value }))

    // const dateChangeHandler = event => setUserInput((prevState) => ({ ...prevState, enteredDate: event.target.value }))

    const titleChangeHandler = event => setEnteredTitle(event.target.value)

    const amountChangeHandler = event => setEnteredAmount(event.target.value)

    const dateChangeHandler = event => setEnteredDate(event.target.value)

    // const [showForm, setShowForm] = useState(false)

    // const toggleFormDisplay = () => {
    //     setShowForm(!showForm)
    // }

    const submitHandler = event => {
        event.preventDefault();
        let expenseObj = {
            title: +enteredTitle,
            amount: Number(enteredAmount),
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseObj)
        // toggleFormDisplay(showForm)
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    // if(!showForm) {
    //     return (
    //     <div className="new-expense-align__btn">
    //         <button type="button" onClick={toggleFormDisplay}>Add New Expense</button>
    //     </div> )
    // }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title : {enteredTitle}</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Amount : {enteredAmount}</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler} />
                </div>
                <div className="new-expense__control">
                    <label>Date : {enteredDate}</label>
                    <input type="date" value={enteredDate} min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} />
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="button" onClick={props.onCancel}>Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;
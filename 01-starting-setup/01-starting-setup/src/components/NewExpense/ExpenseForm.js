 import React, {useState} from 'react';
import './ExpenseForm.css';

function ExpenseForm(props) {
    const[primeiroTitle, setEnteredTitle ]= useState('');
    const[primeiraData, setEnteredDate] = useState('');
    const[primeiraAmount, setEnteredAmount] = useState('');

    function TitleChange(event) {
        setEnteredTitle(event.target.value);
    };

    function DateChange(event) {
        setEnteredDate(event.target.value);
    };

    function AmountChange(event) {
        setEnteredAmount(event.target.value);
    };

    function submitHandler(event) {
        event.preventDefault();

        const expenseData ={
            title: primeiroTitle,
            amount: primeiraAmount,
            date: new Date (primeiraData)

        };
        props.onNewExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate ('');
    };

    return <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' value={primeiroTitle} onChange={TitleChange}></input>
             </div>
             <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31' value={primeiraData} onChange={DateChange}></input>
             </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01' value={primeiraAmount} onChange={AmountChange}></input>
            </div>
         </div>
         <div className='new-expense__actions'> 
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;

/* Os usuarios precisam conseguir acessar o titulo, a data e o valor, por isso serao feito 3 inputs*/
import './NewExpense.css';
import './ExpenseForm'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    function NewExpenseData(primeiraExpenseData) {
        const expenseData ={
             ...primeiraExpenseData,
             id:Math.random().toString()
        };
       props.onAddExpense(expenseData)
    }

    return <div className= "new-expense">
        <ExpenseForm onNewExpenseData= {NewExpenseData}/>
    </div>
}

export default NewExpense;

/*Queremos criar uma forma para nossos inputs */
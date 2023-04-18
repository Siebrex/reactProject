import './NewExpense.css';
import './ExpenseForm'
import ExpenseForm from './ExpenseForm';

function NewExpense(props) {
    function NewExpenseData(primieraExpenseData) {
        const expenseData ={
             ...primieraExpenseData,
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
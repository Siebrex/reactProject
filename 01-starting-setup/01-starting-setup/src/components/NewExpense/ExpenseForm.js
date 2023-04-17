import './ExpenseForm.css';

function ExpenseForm(params) {

    function TitleChange(params) {
        console.log('title changed!');
    };


    return <form>
        <div className='new-expense__controls'>
            <div className="new-expense__control">
                <label>Title</label>
                <input type='text' onChange={TitleChange}></input>
             </div>
             <div className="new-expense__control">
                <label>Date</label>
                <input type='date' min='2019-01-01' max='2023-12-31'></input>
             </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type='number' min='0.01' step='0.01'></input>
            </div>
         </div>
         <div className='new-expense__actions'> 
            <button type='submit'>Add Expense</button>
        </div>
    </form>
}

export default ExpenseForm;

/* Os usuarios precisam conseguir acessar o titulo, a data e o valor, por isso serao feito 3 inputs*/
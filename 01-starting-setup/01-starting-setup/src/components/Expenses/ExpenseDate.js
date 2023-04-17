import './ExpenseDate.css';


function ExpenseDate(props){
    const year= props.date.toLocaleString('pt-BR', {year: 'numeric'});
    const day = props.date.toLocaleString('pt-BR', {day: '2-digit'});

   return(
    <div className="expense-date">
    <div classNmae="expense-date__month">{props.date.toLocaleString('pt-BR', {month: 'long'})}</div>
    <div className="expense-date__year">{year}</div>
    <div className="expense-date__day ">{day}</div>
   </div>
   );
}

export default ExpenseDate;



/* foi feita a separaçao de componentes, separamos a data dos expense.  */
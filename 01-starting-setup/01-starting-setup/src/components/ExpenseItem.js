import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {

  return (
    <div className="expense-item">
      <ExpenseDate date={props.date }></ExpenseDate>
      <div className="expense-item__description">
        <h2>{props.title}</h2> 
        <div className="expense-item__price" >R${props.amount}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;

/* nao estamos defininod os valores dentro da funcao, esta vindo "de fora", do app.js, por meio do props e atributos.*/ 
import React, {useState} from 'react';

import './ExpenseItem.css';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';

function ExpenseItem(props) {
 const[title, setTitle] = useState(props.title);

  function BotaoClicar() {
    setTitle('Update!');
    console.log(title);
  };

  return (
    <Card className="expense-item">
      < ExpenseDate date={props.date }></ExpenseDate>
      <div className="expense-item__description">
        <h2>{title}</h2> 
        <div className="expense-item__price" >R${props.amount}</div>
      </div>
      <button onClick={BotaoClicar} >Change Titlle</button>
    </Card>
  );
}

export default ExpenseItem;

/* nao estamos defininod os valores dentro da funcao, esta vindo "de fora", do app.js, por meio do props e atributos.*/ 
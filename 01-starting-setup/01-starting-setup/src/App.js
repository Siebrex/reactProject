import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { id: "e1", title: "Aluguel", amount: 500.0, date: new Date(2023, 4, 10) },
    { id: "e2", title: "Energia", amount: 80.0, date: new Date(2023, 2, 12) },
    { id: "e3", title: "Faculdade", amount: 200.0, date: new Date(2023, 1, 9) },
    {
      id: "e4",
      title: "Bicicleta",
      amount: 2100.0,
      date: new Date(2023, 3, 6),
    },
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;

/*Obs: no java script para criar um paragrafo nao iria so colocar a tag "p". teria que fazer:
  const paragrafo = document.creatElement('p'); -criar o elemento
  paragrafo.textContent= "this is visible";  -dizer o conteudo do paragrafo
  document.getElementbyId('root')append(paragrafo) - para depois enviar o pargrafo para a div root */

/* O const expenses sera um array que sesu itens serao objetos(tudo de javascript)*/

/* ira adicionar atributos, ex: title,  nos 'exprenseitem , para criar os 'props' e, assim, conseguir os dados de fora e nao ja codificados.*/

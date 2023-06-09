import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const App = () => {
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

  function addExpense(expense) {
    console.log('in app.js');
    console.log(expense);
  } //function para passar de filho para pai 

  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      <Expenses items={expenses} />
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

/*Se voce quiser podera no lugar da function, colocar uma arrow function por meio de const*/

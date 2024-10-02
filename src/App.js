import { useState } from 'react';
import './App.css';

function App() {
  let [todoList,setTodoList] = useState([]);

  let saveTodoList = (event) => {
    event.preventDefault();
    let todo = event.target.todo.value;
    if(!todoList.includes(todo)) {
      let finalTodoList = [...todoList,todo];
      setTodoList(finalTodoList);  
    } else {
      alert("TODO name alredy exits")
    }
  }

  let list = todoList.map((value,i) => {
    // let todoList
    return(
      <ToDoListItems value={value} key={i} index={i} todoList={todoList} setTodoList={setTodoList}></ToDoListItems>
    )
  })
  return (
    <div className="App">
      <h3>TODO List</h3>
      <form onSubmit={saveTodoList}>
        <input type="text" name="todo"></input>
        <button>Save</button>
      </form>

      <div className='outerDiv'>
        <ul>
          {list}
        </ul>
      </div>
      
    </div>
  );
}

export default App;


function ToDoListItems({value,index,todoList,setTodoList}) {
  let [status,setStatus] = useState(false);

  let deleteRow = () => {
    let finalData = todoList.filter((value,i) => i!==index);
    setTodoList(finalData);
  }

  let checkStatus = () => {
    setStatus(true);
  }

  return (
    <li className={status ? 'complete-todo' : ''} onClick={checkStatus}>{index+1} {value} <span onClick={deleteRow}>&times;</span></li>
  );
}
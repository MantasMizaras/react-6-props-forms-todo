import { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import SingleTodo from '../SingleTodo/SingleTodo';

const initTodos = [
  { id: 1, title: 'Do sport', isDone: true },
  { id: 2, title: 'Do jogging', isDone: false },
];

export default function TodoList() {
  const [todoArray, setTodoArray] = useState(initTodos);
  const [newTodo, setNewTodo] = useState('');
  const [currentId, setCurrentId] = useState(3);

  console.log('todoArray ===', todoArray);

  function todoEnterHandler(event) {
    setNewTodo(event.target.value);
  }

  // sukurti funkcija kuri prideda nauja todo
  function createTodo(event) {
    event.preventDefault();
    const msgEl = document.getElementById('msg');
    if (newTodo.length < 1) {
      msgEl.textContent = 'Please enter something';
      msgEl.style.color = 'red';
      return;
    } else {
      msgEl.textContent = 'Added new Todo ';
      msgEl.style.color = 'green';

      const todo = { id: currentId, title: newTodo, isDone: false };
      console.log('todo ===', todo);
      //   setNewTodo('');
      setTodoArray([...todoArray, todo]);
      setCurrentId((prevId) => prevId + 1);

      setNewTodo('');
    }
    return;
  }

  function handleDelete(deleteId) {
    console.log('handleDelete was iniciated by ===', deleteId);
    // const afterDelArray = todoArray.filter((todo) => todo.id !== id);
    // setTodoArray(afterDelArray);
  }

  // { id: 3, title: 'Buy sugar', isDone: false }
  // iskvieciam funkcija su mygtuko paspaudimu

  // sukurti funkcija pagal toggleTodo(id)
  // pasidarom todoArray kopija
  // paiesko, todoArray kopijoj objekto su id lygiu id(argumenta)
  // surade todo objekta pakeicia isDone statusa i priesinga
  // atnaujinam state su pakeistu objektu

  return (
    <section className='content'>
      <ul id='list' className='list'>
        {todoArray.map((tObj) => (
          <SingleTodo key={tObj.id} id={tObj.id} title={tObj.title} isDone={tObj.isDone} onDelete={handleDelete} />
        ))}

        {/* <SingleTodo {...todoArray[0]} /> */}
        {/* <SingleTodo {...todoArray[1]} />
        <SingleTodo {...{ id: 3, title: 'Buy sugar', isDone: false }} /> */}

        <li className='item line-through'>
          <i className='fa fa-check-circle make-done' aria-hidden='true'></i>
          <span className='text'> done todo</span>
          <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
          <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
        </li>
      </ul>

      <AddTodo onClick={createTodo} onChange={todoEnterHandler} />
    </section>
  );
}

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

  console.log('todoArray ===', todoArray);

  function todoEnterHandler(event) {
    setNewTodo(event.target.value);
  }

  //

  // sukurti funkcija kuri prideda nauja todo
  function createTodo() {
    const todo = { id: 3, title: 'newTodo.value', isDone: false };
    console.log('todo ===', todo);
    setTodoArray([...todoArray, todo]);

    setNewTodo('');
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
          <SingleTodo key={tObj.id} title={tObj.title} isDone={tObj.isDone} />
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

// function errorMsg() {
//     const errEl = document.getElementById('error-msg');
//     if (newTodo.length > 0) {
//       errEl.textContent = 'Added new Todo ';
//       errEl.style.color = 'green';
//       setNewTodo('');
//     }

//     if (newTodo.length < 1) {
//       console.log('newTodo.length ===', newTodo.length);
//       errEl.textContent = 'Please enter something';
//       errEl.style.color = 'red';
//       setNewTodo('');
//     }
//     return;
//

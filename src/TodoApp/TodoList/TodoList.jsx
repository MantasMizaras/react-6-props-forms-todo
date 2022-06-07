import { useState } from 'react';
import SingleTodo from '../SingleTodo/SingleTodo';

const initTodos = [
  { id: 1, title: 'Do sport', isDone: true },
  { id: 2, title: 'Do jogging', isDone: false },
];

export default function TodoList() {
  const [todoArray, setTodoArray] = useState(initTodos);

  // sukurti funkcija kuri prideda nauja todo
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
        <SingleTodo {...todoArray[0]} />
        <SingleTodo {...todoArray[1]} />
        <SingleTodo {...{ id: 3, title: 'Buy sugar', isDone: false }} />

        <li className='item line-through'>
          <i className='fa fa-check-circle make-done' aria-hidden='true'></i>
          <span className='text'> done todo</span>
          <i className='fa fa-pencil edit-icon' aria-hidden='true'></i>
          <i className='fa fa-trash delete-icon' aria-hidden='true'></i>
        </li>
      </ul>
      <div className='add-item'>
        <i id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
        <input type='text' id='input' placeholder='Add todo' />
      </div>
    </section>
  );
}

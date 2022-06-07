import SingleTodo from '../SingleTodo/SingleTodo';

const initTodos = [
  { id: 1, title: 'Do sport', isDone: true },
  { id: 2, title: 'Do jogging', isDone: false },
];

export default function TodoList() {
  return (
    <section className='content'>
      <ul id='list' className='list'>
        <SingleTodo {...initTodos[0]} />
        <SingleTodo {...initTodos[1]} />

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

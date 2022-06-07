export default function AddTodo({ onClick, onChange }) {
  return (
    <div className='add-item'>
      <p id='error-msg'></p>
      <i onClick={onClick} id='add-todo-btn' className='fa fa-plus-circle' aria-hidden='true'></i>
      <input type='text' id='input' placeholder='Add todo' onChange={onChange} />
    </div>
  );
}

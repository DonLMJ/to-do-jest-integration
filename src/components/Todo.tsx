import React from 'react';
import { MdRadioButtonChecked } from 'react-icons/md';
import { MdRadioButtonUnchecked } from 'react-icons/md';
import { AiOutlineDelete } from 'react-icons/ai';

const Todo = ({ todo, toggleTodo, deleteTodo }) => {
    return (
        <div className="todo__container " data-testid="todo">
            <div className="todo__checkbox" data-testid="todo_complete" onClick={() => toggleTodo(todo.id)}>
                {todo.completed ? <MdRadioButtonChecked className='icon checked' /> : <MdRadioButtonUnchecked className='icon' />}
            </div>
            <div className={todo.completed ? 'todo__text complete' : 'todo__text'}>
                <p>{todo.text}</p>
            </div>
            <div className="todo__delete" data-testid="todo_delete" onClick={() => deleteTodo(todo.id)}>
                <AiOutlineDelete className='icon' />
            </div>
        </div>
    )
}

export default Todo;
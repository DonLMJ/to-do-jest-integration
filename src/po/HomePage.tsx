import { screen, fireEvent } from '@testing-library/react';

class HomePage {
    addTodo = (todo) => {
        const inputElement = screen.getByPlaceholderText('Add new Todo');
        const buttonElement = screen.getByRole('button', { name: /Add Todo/i });
        fireEvent.change(inputElement, { target: { value: todo } });
        fireEvent.click(buttonElement);
    };

    addTodos = (todos) => {
        const inputElement = screen.getByPlaceholderText('Add new Todo');
        const buttonElement = screen.getByRole('button', { name: /Add Todo/i });
        todos.forEach((todo) => {
            fireEvent.change(inputElement, { target: { value: todo } });
            fireEvent.click(buttonElement);
        });
    };

    deleteTodo = (todo) => {
        const todoElement = screen.getByText(todo);
        const deleteButton = todoElement.closest('[data-testid="todo"]').querySelector('[data-testid="todo_delete"]');
        fireEvent.click(deleteButton);
    };

    completeTodo = (todo) => {
        const todoElement = screen.getByText(todo);
        const completeButton = todoElement.closest('[data-testid="todo"]').querySelector('[data-testid="todo_complete"]');
        fireEvent.click(completeButton);
    };

    findByText = (text) => {
        return screen.getByText(text);
    };
}

export default HomePage;
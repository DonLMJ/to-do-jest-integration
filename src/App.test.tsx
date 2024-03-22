import React from 'react';
import { render, screen, fireEvent, within } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';
import HomePage from './po/HomePage';
import { getByTodoText } from './helpers';


describe('App', () => {

  let homePage; // Declare a variable to hold an instance of HomePage

  // Constants for todo text
  const todoText1 = 'Send a mail to Dad';
  const todoText2 = 'Get some gifts for Brother';

  // Hook to render the App component before each test
  beforeEach(() => {
    render(<App />);
    homePage = new HomePage(); // Instantiate a new object of HomePage before each test

  });

  test('adding and displaying one todo', () => {
    homePage.addTodo(todoText1);
    const todoElement = getByTodoText(todoText1);
    expect(todoElement).toBeInTheDocument();
  });

  test('adding and displaying multiple todos', () => {
    homePage.addTodos([todoText1, todoText2]);
    const todoElements = screen.queryAllByTestId('todo');
    expect(todoElements.length).toBe(4);
  });

  test('deleting one todo', () => {
    homePage.addTodos([todoText1, todoText2]);
    homePage.deleteTodo(todoText1);
    const todoElements = screen.queryAllByTestId('todo');
    expect(todoElements.length).toBe(3);
  });

  test('completing one todo', () => {
    homePage.addTodo([todoText1]);
    homePage.completeTodo(todoText1);
    const todoElement = getByTodoText(todoText1);
    const todoParentDiv = todoElement.closest('div');
    expect(todoParentDiv).toHaveClass('todo__text', 'complete');
  });
});

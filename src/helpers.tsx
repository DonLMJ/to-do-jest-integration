import { screen } from '@testing-library/react';

export const getByTodoText = (todoText: string) => {
    return screen.getByText(new RegExp(todoText, 'i'));
};
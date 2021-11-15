import React from 'react';
import { render, screen } from '@testing-library/react';
import TaskList from './TaskList';

describe('TaskList Renders', () => {
  const tasks = [
    {
      id: 1,
      text: 'task one',
      done: false,
    },
    {
      id: 42,
      text: 'task 2',
      done: true,
    },
  ];

  test('renders tasks', () => {
    // Act
    render(
      <TaskList
        tasks={tasks}
        onTaskClickCallback={() => {}}
        onTaskDeleteCallback={() => {}}
      />
    );

    // Assert
    expect(screen.getByText('task one')).toBeInTheDocument();
    expect(screen.getByText('task 2')).toBeInTheDocument();
  });
});

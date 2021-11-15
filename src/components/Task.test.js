import React from 'react';
import { render, screen } from '@testing-library/react';
import Task from './Task';

describe('Task', () => {
  test('Renders text content', () => {
    // Act
    render(
      <Task
        id={1}
        text={'Test Text'}
        done={true}
        onClickCallback={() => {}}
        onDeleteCallback={() => {}}
      />
    );

    // Assert
    expect(screen.getByText('Test Text')).toBeInTheDocument();
  });

  test('Runs callbacks when buttons clicked', () => {
    // Arrange
    const clickCallback = jest.fn();
    const deleteCallback = jest.fn();

    // Act
    render(
      <Task
        id={42}
        text={'Test Text'}
        done={true}
        onClickCallback={clickCallback}
        onDeleteCallback={deleteCallback}
      />
    );

    screen.getByText('Test Text').click();
    screen.getByTestId('delete button 42').click();

    // Assert
    expect(clickCallback).toHaveBeenCalledTimes(1);
    expect(deleteCallback).toHaveBeenCalledTimes(1);
    // Check parameters passed to callbacks
    expect(clickCallback).toHaveBeenCalledWith(42);
    expect(deleteCallback).toHaveBeenCalledWith(42);
  });

  test('Task has class "tasks__item__toggle--completed" if done is true', () => {
    // Act
    render(
      <Task
        id={1}
        text={'Test Text'}
        done={true}
        onClickCallback={() => {}}
        onDeleteCallback={() => {}}
      />
    );

    expect(screen.getByText('Test Text')).toHaveClass(
      'tasks__item__toggle--completed'
    );
  });

  test('Task does not have class "tasks__item__toggle--completed" if done is false', () => {
    // Act
    render(
      <Task
        id={1}
        text={'Test Text'}
        done={false}
        onClickCallback={() => {}}
        onDeleteCallback={() => {}}
      />
    );

    // Assert
    expect(screen.getByText('Test Text')).not.toHaveClass(
      'tasks__item__toggle--completed'
    );
  });
});

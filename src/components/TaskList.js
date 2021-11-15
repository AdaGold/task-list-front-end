import React from 'react';
import PropTypes from 'prop-types';
import Task from './Task';
import './TaskList.css';

const TaskList = ({ tasks, onTaskClickCallback, onTaskDeleteCallback }) => {
  const getTaskListJSX = (tasks, onTaskClickCallback, onTaskDeleteCallback) => {
    return tasks.map((task) => {
      return (
        <Task
          key={task.id}
          id={task.id}
          text={task.text}
          onClickCallback={onTaskClickCallback}
          onDeleteCallback={onTaskDeleteCallback}
          done={task.done}
        />
      );
    });
  };
  return (
    <ul className="tasks__list no-bullet">
      {getTaskListJSX(tasks, onTaskClickCallback, onTaskDeleteCallback)}
    </ul>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      done: PropTypes.bool.isRequired,
    })
  ).isRequired,

  onTaskClickCallback: PropTypes.func.isRequired,
  onTaskDeleteCallback: PropTypes.func.isRequired,
};

export default TaskList;

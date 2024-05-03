import PropTypes from 'prop-types';

import './Task.css';

const Task = ({
  id,
  title,
  isComplete,
  onToggleCompleteCallback,
  onDeleteCallback,
}) => {
  const buttonClass = isComplete ? 'tasks__item__toggle--completed' : '';

  const handleTaskClicked = () => {
    onToggleCompleteCallback(id);
  };

  const handleRemoveClicked = () => {
    onDeleteCallback(id);
  };

  return (
    <li className="tasks__item">
      <button
        className={`tasks__item__toggle ${buttonClass}`}
        onClick={handleTaskClicked}
      >
        {title}
      </button>
      <button
        className="tasks__item__remove button"
        onClick={handleRemoveClicked}>x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
  onToggleCompleteCallback: PropTypes.func.isRequired,
  onDeleteCallback: PropTypes.func.isRequired,
};

export default Task;

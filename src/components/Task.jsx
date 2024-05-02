import PropTypes from 'prop-types';

import './Task.css';

const Task = ({ id, title, isComplete }) => {
  return (
    <li className="tasks__item">
      <button className="tasks__item__toggle">{title}</button>
      <button className="tasks__item__remove button">x</button>
    </li>
  );
};

Task.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  isComplete: PropTypes.bool.isRequired,
};

export default Task;

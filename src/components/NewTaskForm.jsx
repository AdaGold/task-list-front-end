import { useState } from 'react';
import PropTypes from 'prop-types';
import './NewTaskForm.css';

// It can be convenient to declare an object of function to represent
// or build the default values for the state when we use an object
// as the state so that it's easy to set/reset
const kNewFormData = {
  title: '',
  isComplete: 'false',
};

const NewTaskForm = ({ onAddTaskCallback }) => {
  const [taskData, setTaskData] = useState(kNewFormData);

  const handleChange = (e) => {
    const fieldName = e.target.name;
    const value = e.target.value;

    // the [] around fieldName is not related to arrays. It's
    // telling JS to treat the key expression as JS code rather
    // than a plain string, so [fieldName]: means to use the value
    // stored in fieldName as the key, rather than literally "fieldName"
    setTaskData(oldData => ({ ...oldData, [fieldName]: value }));

    // Notice the () around the object. Without those, JS would interpret
    // the {} as the braces around the function body rather than the
    // start of an object literal.
  };

  const handleSubmit = (e) => {
    // prevent the default browser submit action
    e.preventDefault();

    if (!taskData.title) { return; }

    // reset the form back to its default values. This won't affect the value
    // of taskData until React re-renders, so we are still free to use it in
    // the remainder of this function
    setTaskData(kNewFormData);

    // use the supplied callback to notify the outside world that we
    // have data ready to be used. Notice that we translate the string values
    // 'true' and 'false' into a real boolean here. It had been a string
    // because we used a select control for picking whether the task was
    // complete or not, and the value of a select is a string. We could have
    // used a custom handler to response to the select change event rather than
    // using the same handler for title and isComplete, but it's relatively
    // straightforward to deal with here, as long as we don't forget to do it!
    onAddTaskCallback({
      ...taskData,
      isComplete: taskData.isComplete === 'true'
    });
  };

  // it's somewhat unsafe to use id on the title and isComplete input tags.
  // while unlikely for this input control, in general, a control might appear
  // on page multiple times, while an id should appear only a single time.
  // we are using an id in order to the label's htmlFor attribute to properly
  // connect to the related label. if we were more concerned about the ids being
  // unique across multiple controls, we could use a uuid module to generate
  // a "unique" value that we could concatenate into the control ids so that
  // we could be sure the id was truly unique on the page.

  return (
    <form onSubmit={handleSubmit} className="new-task__form">
      <section>
        <h2>Add a Task</h2>
        <div className="new-task__fields">
          <label htmlFor="new-task__title">Title</label>
          <input
            name="title"
            id="new-task__title"
            value={taskData.title}
            onChange={handleChange}
          />
          <label htmlFor="new-task__isComplete">Complete</label>
          <select
            value={taskData.isComplete}
            onChange={handleChange}
            name="isComplete"
            id="new-task__isComplete"
          >
            <option value="true">
							Yes
            </option>
            <option value="false">
							No
            </option>
          </select>
          <button className="button new-task__submit" type="submit">
						Add Task
          </button>
        </div>
      </section>
    </form>
  );
};

NewTaskForm.propTypes = {
  onAddTaskCallback: PropTypes.func.isRequired,
};

export default NewTaskForm;
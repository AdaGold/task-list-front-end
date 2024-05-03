import { useState, useEffect } from 'react';
import TaskList from './components/TaskList.jsx';
import './App.css';
import axios from 'axios';
import NewTaskForm from './components/NewTaskForm.jsx';

// read the base url from the .env file
const kBaseUrl = import.meta.env.VITE_BASE_URL;
// const kBaseUrl = 'http://localhost:5000';


const taskApiToJson = task => {
  // unpack the fields of a task, renaming is_complete to isComplete in the 
  // process.
  const { description, id, is_complete: isComplete, title } = task;

  // reassemble the fields into an object, now with JS-style fields
  return { description, id, isComplete, title };
};

// helper function to get all tasks. this function makes the axios call, and
// unpacks the response data (returning a list of task objects), or throwing
// a simple error. in order for this to be used from the component, we need to
// be sure to return the final promise, so that the component can add additional
// then/catch clauses to update its state or do any additional error handling

const getTasksAsync = () => {
  // return the end of the promise chain to allow further then/catch calls
  return axios.get(`${kBaseUrl}/tasks`)
  .then(response => {
    // convert the received tasks from having python-like keys to JS-like keys
    // using a helper function (taskApiToJson) that will be run on each task
    // in the result.

    // the value we return from a then will become the input to the next then
    return response.data.map(taskApiToJson);
  })
  .catch(err => {
    console.log(err);

    // anything we throw will skip over any intervening then clauses to become
    // the input to the next catch clause
    throw new Error('error fetching tasks');
  });
};

// helper function to mark a task complete or incomplete. To do so, we need
// to know the id of the task being modified, as well as whether we are
// marking it complete or incomplete. Using that information, we can pick which
// endpoint to use (since marking complete and incomplete are two different
// endpoints in task-list).

const updateTaskAsync = (id, markComplete) => {
  const endpoint = markComplete ? 'mark_complete' : 'mark_incomplete';

  // return the end of the promise chain to allow further then/catch calls
  return axios.patch(`${kBaseUrl}/tasks/${id}/${endpoint}`)
  .then(response => {
    // convert the received task from having python-like keys to JS-like keys
    // using a helper function (taskApiToJson)

    // the value we return from a then will become the input to the next then
    return taskApiToJson(response.data.task);
  })
  .catch(err => {
    console.log(err);

    // anything we throw will skip over any intervening then clauses to become
    // the input to the next catch clause
    throw new Error(`error updating task ${id}`);
  });
};

// helper function to delete a task. This function makes the asynchronous API
// call using axios to delete the specified task.

const deleteTaskAsync = id => {
  // return the end of the promise chain to allow further then/catch calls
  // note no .then here since there's nothing useful for us to process from the
  // response. it returns a status message structure:
  // { "details": "Task 3 \"do the other thing\" successfully deleted" }
  return axios.delete(`${kBaseUrl}/tasks/${id}`)
  .catch(err => {
    console.log(err);

    // anything we throw will skip over any intervening then clauses to become
    // the input to the next catch clause
    throw new Error(`error deleting task ${id}`);
  });
};

const addTaskAsync = (taskData) => {
  // extract values from taskData
  const { title, isComplete } = taskData;

  // compute additional values
  const description = 'created in Task List Front End';
  const completedAt = isComplete ? new Date() : null;

  // build a request body using a string key to avoid having the linter
  // yell at us
  const body = { title, description, 'completed_at': completedAt };

  // return the end of the promise chain to allow further then/catch calls
  return axios.post(`${kBaseUrl}/tasks`, body)
  .then(response => {
    // convert the received task from having python-like keys to JS-like keys
    // using a helper function (taskApiToJson)

    // the value we return from a then will become the input to the next then
    return taskApiToJson(response.data.task);
  })
  .catch(err => {
    console.log(err);

    // anything we throw will skip over any intervening then clauses to become
    // the input to the next catch clause
    throw new Error('error creating task');
  });
};

const App = () => {
  const [tasks, setTasks] = useState([]);  // initialize to an empty list of tasks

  // schedule our first refresh to run when the component mounts
  useEffect(() => {
    refreshTasks();
  }, []);

  // use our helper to get the asynchronous list of tasks from axios, then
  // chain a callback to set our tasks state once we have the result

  const refreshTasks = () => {
    return getTasksAsync()
    .then((tasks) => {
      setTasks(tasks);
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  // use our helper to asynchronously update the specified task, then
  // chain a callback to set our tasks state once a successful result is
  // returned. We duplicate the old list of tasks, but replace the task
  // corresponding to our update with the task value we got back from our
  // helper.

  const updateTask = id => {
    // find the task we want to update
    const task = tasks.find(task => task.id === id);

    // If we didn't find the task for some reason, just return an empty promise
    // to maintain type compatibility with the main code flow.
    if (!task) { return Promise.resolve(); }

    // start the async task to toggle the completion
    return updateTaskAsync(id, !task.isComplete)
    .then(newTask => {
      // use the callback style of updating the tasks list
      // oldTasks will receive the current contents of the tasks state
      setTasks(oldTasks => {
        // return the new value for the tasks state
        return oldTasks.map(task => {
          if (task.id === newTask.id) {
            // if this task is the one we just updated, return the new data we
            // got from the api result to use in the tasks list
            return newTask;
          } else {
            // otherwise, it's an existing task, so just use it
            return task;
          }
        });
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  // use our helper to asynchronously delete the specified task, then
  // chain a callback to set our tasks state once a successful result is
  // returned. Notice that the input to the .then is empty, since we didn't
  // return anything from the .then of the helper. But if an error had
  // occurred, the code would jump over the .then and run the .catch instead

  const deleteTask = id => {
    return deleteTaskAsync(id)
    .then(() => {
      // use the callback style of updating the tasks list
      // oldTasks will receive the current contents of the tasks state
      setTasks(oldTasks => {
        // return the new value for the tasks state
        return oldTasks.filter(task => task.id !== id);
      });
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  const addTask = taskData => {
    return addTaskAsync(taskData)
    .then(task => {
      // use the callback style of updating the tasks list
      // oldTasks will receive the current contents of the tasks state
      // this is very short, so we can use the implied return arrow function
      setTasks(oldTasks => [ ...oldTasks, task ]);
    })
    .catch(err => {
      console.log(err.message);
    });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          <TaskList
              tasks={tasks}
              onToggleCompleteCallback={updateTask}
              onDeleteCallback={deleteTask}
            />
        </div>
        <div>
          <NewTaskForm onAddTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;

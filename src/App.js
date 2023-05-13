import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import TaskList from './components/TaskList';
import NewTaskForm from './components/NewTaskform';

export const URL = 'https://task-list-api-c17.onrender.com/tasks';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [status, setStatus] = useState('Loading...');

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        const newTasks = res.data.map((task) => {
          return {
            id: task.id,
            title: task.title,
            isComplete: task.is_complete,
          };
        });
        setStatus('Loaded');
        setTasks(newTasks);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const updateTask = (id) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        task.isComplete = !task.isComplete;
        let routeWord = 'mark_complete';
        if (!task.isComplete) {
          routeWord = 'mark_incomplete';
        }
        axios
          .patch(`${URL}/${id}/${routeWord}`)
          .then(() => setTasks(newTasks))
          .catch((err) => console.log(err));
      }
      return task;
    });
  };

  const deleteTask = (id) => {
    axios
      .delete(`${URL}/${id}`)
      .then(() => {
        const newTasks = tasks.filter((task) => task.id !== id);
        setTasks(newTasks);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const addTask = ({ title, isComplete }) => {
    axios
      .post(URL, {
        title,
        // eslint-disable-next-line camelcase
        completed_at: isComplete ? new Date() : null,
        description: '',
      })
      .then((res) => {
        const newTask = {
          id: res.data.task.id,
          title: res.data.task.title,
          isComplete: res.data.task.is_complete,
        };
        setTasks([...tasks, newTask]);
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {status === 'Loading...' ? (
            `${status}`
          ) : (
            <TaskList
              tasks={tasks}
              onToggleCompleteCallback={updateTask}
              onDeleteCallback={deleteTask}
            />
          )}
        </div>
        <div>
          <NewTaskForm onAddTaskCallback={addTask} />
        </div>
      </main>
    </div>
  );
};

export default App;

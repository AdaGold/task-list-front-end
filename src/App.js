import React, { useState } from 'react';
import './App.css';
import TaskList from './components/TaskList';

const TASKS = [
  {
    id: 1,
    text: 'Mow the lawn',
    done: false,
  },
  {
    id: 2,
    text: 'Cook Pasta',
    done: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(TASKS);
  console.log(tasks);

  const updateTask = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        task.done = !task.done;
      }
      return task;
    });
    setTasks(newTasks);
  };

  const deleteTask = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
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
            onTaskClickCallback={updateTask}
            onTaskDeleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;

import React, { useState } from 'react';
import './App.css';
import TaskList from './components/task_list';

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
    console.log('Updating Task');
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
            tasks={TASKS}
            onTaskClickCallback={updateTask}
            onTaskDeleteCallback={deleteTask}
          />
        </div>
      </main>
    </div>
  );
};

export default App;

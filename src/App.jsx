import { useState } from 'react';
import TaskList from './components/TaskList.jsx';
import './App.css';
import tasksJson from './tasks.json';

const TASKS = [
  {
    id: 1,
    title: 'Mow the lawn',
    isComplete: false,
  },
  {
    id: 2,
    title: 'Cook Pasta',
    isComplete: true,
  },
];

const App = () => {
  const [tasks, setTasks] = useState(tasksJson);

  const updateTask = id => {
    // create a new list of task data in which the clicked task has its
    // completion toggled. This approach is _slightly_ unsafe in asynchronous
    // code, and we may prefer the functional style of setting tasks, which
    // has the latest state, even if a render hasn't yet happened (see below).

    const newTasks = tasks.map(task => {
      if (task.id === id) {
        return { ...task, isComplete: !task.isComplete };
      } else {
        return task;
      }
    });

    setTasks(newTasks);

    // // Alternative functional style set state call
    // setTasks(oldTasks => {
    //   // the logic is identical as above, but instead, we return the new value
    //   // to be used for the state, and the input parameter will be the current
    //   // state with any pending changes applied, even if the next render hasn't
    //   // yet occurred.

    //   return oldTasks.map(task => {
    //     if (task.id === id) {
    //       return { ...task, isComplete: !task.isComplete };
    //     } else {
    //       return task;
    //     }
    //   });
    // });
  };

  const deleteTask = id => {
    // create a new list of task data in which the clicked task is removed
    // from the list. The function given to .filter should return true if that
    // entry in the list should be kept, and false if it should be excluded. We
    // want to keep the tasks that _weren't_ clicked, so we return true for the
    // tasks whose id don't match the clicked task id. As with toggling the
    // completion, this approach is slightly unsafe for asynchronous code, so
    // might prefer the functional set state style (see below).

    const newTasks = tasks.filter(task => task.id !== id);

    setTasks(newTasks);

    // // Alternative functional style set state call
    // setTasks(oldTasks => {
    //   // the logic is identical as above, but instead, we return the new value
    //   // to be used for the state, and the input parameter will be the current
    //   // state with any pending changes applied, even if the next render hasn't
    //   // yet occurred.

    //   return oldTasks.filter(task => task.id !== id);
    // });
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
      </main>
    </div>
  );
};

export default App;

# Wave 03:  Lifting state up

Currently our Task List app works, but has some limitations:

1.  We cannot remove tasks from the list.
1.  If we mark a task complete and then hit refresh, the task will revert to it's initial state.
1.  Data is stored in two places.  `App.js` has a list of tasks as a constant and each `Task` component stores it's own state.

For the 1st part we will make `Task` a stateless component and store the state for the task app in `App.js`

### First State From Task.js

First we will remove state fromt he `Task` component and simply render the props.

### Next Store State in `App`.

Next we will update `App.js` to store the list of task data in state.  

### Third Build Two Functions To Update And Remove A Task

We can then build a function to update an individual task (toggling it's `done` field).  This function will need the `id` of the task to modify.

Then we can create a function which takes an id and removes that task from the array of tasks in state.

### Fourth Pass The Functions As Props To TaskList And Task Components

We can then pass these functions as props through `TaskList` and into `Task` as props and call these callback functions when the user clicks on the buttons.
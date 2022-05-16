# Wave 02:  Lifting state up

In Wave 02 we will update the Task List Front End to achieve a few goals. Lifting up state to the `App` will set us up to connect our front end to our back end API.
1. Lift up state so that the `App` stores the state of all the `Task`s. 
    - The `Task` component should not have any state information 
1. Update the toggle `done` field of each `Task` to update the state stored in `App`
1. Add a feature to remove a `Task` from `TaskList`.

<details>
    <summary>Expand for a hint on lifting the state up to <code>App</code> and updating the toggle `done` feature.</summary>

    1. Remove state from the `Task` component and simply render the props.
    2. update `App.js` to store the list of task data in state.  
    3. Build a function to update an individual task (toggling it's `done` field).  
        - This function will need the `id` of the task to modify.
        - This function will need to update the task data stored in state.
    4. Pass this function as a callback through `TaskList` to `Task`
    5. Give this function to the `onClick`

<details>

<details>
    <summary>Expand for a hint on implementing <code>App</code> the delete feature.</summary>
    1. Remove state from the `Task` component and simply render the props.
    1. update `App.js` to store the list of task data in state.  
    1. Build a function to delete an individual task. 
        - This function will need the `id` of the task to delete.
        - This function will need to update the task data stored in state.
    1. Pass this function as a callback through `TaskList` to `Task`
    1. Give this function to the `onClick`

<details>




For the 1st part we will 

### First State From Task.js

First we will remove state from the `Task` component and simply render the props.

### Next Store State in `App`.

Next we will update `App.js` to store the list of task data in state.  

### Third Build Two Functions To Update And Remove A Task

We can then build a function to update an individual task (toggling it's `done` field).  This function will need the `id` of the task to modify.

Then we can create a function which takes an id and removes that task from the array of tasks in state.

### Fourth Pass The Functions As Props To TaskList And Task Components

We can then pass these functions as props through `TaskList` and into `Task` as props and call these callback functions when the user clicks on the buttons.
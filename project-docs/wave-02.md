# Wave 02:  Lifting Up State

**Learn Topics: Lifting State Up required for this wave**

In Wave 02 we will update the Task List Front End to store state in the `App`. 

Lifting up state will set us up to connect our front end to our back end API. 

We will update and implement the following features:
1. Update the toggle `complete` feature of each `Task` to update the state of the task data stored in `App`.
1. Add a feature to delete a `task` from the task data stored and rendered by the `App`.


## Lifting Up State
<details>
    <summary>Expand for hints on lifting the state up to <code>App</code></summary>

1. Remove state from the <code>Task</code> component and instead simply render the props.
2. Update <code>App.js</code> to store the list of task data in state.  
3. Update the data passed to <code>TaskList</code> through props to use the task data stored in state.

</details>

## Toggle complete feature
<details>
    <summary>Expand for hints on updating the toggle complete feature.</summary>

1. Build a function to update an individual task (toggling its `isComplete` field) in <code>App</code>.  
    - This function will need the <code>id</code> of the task to modify.
    - This function will need to update the task data stored in state.
2. Pass this function as a callback through <code>TaskList</code> to <code>Task</code>
3. Update button to receive the callback function in the <code>onClick</code> attribute.

</details>

## Delete Feature
<details>
    <summary>Expand for hints on implementing the delete feature.</summary>

1. Build a function to delete an individual task in <code>App</code>. 
    - This function will need the <code>id</code> of the task to delete.
    - This function will need to update the task data stored in state.
2. Pass this function as a callback through <code>TaskList</code> to <code>Task</code>
3. Update button to receive the callback in the <code>onClick</code> attribute.

</details>





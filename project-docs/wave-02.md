# Wave 02:  Lifting Up State

In Wave 02 we will update the Task List Front End to store state in the `App`. 

Lifting up state will set us up to connect our front end to our back end API. 

We will update and implement the following features:
1. Update the toggle `complete` feature of each `Task` to update the state of the task data stored in `App`.
1. Add a feature to delete a `task` from the task data stored and rendered by the `App`.


## Lifting Up State
<details>
    <summary>Expand for hints on lifting the state up to <code>App</code></summary>

    1. Remove state from the `Task` component and simply render the props.
    2. Update `App.js` to store the list of task data in state.  
    3. Update the data passed to `TaskList` through props to use the task data store in state.

</details>

## Toggle complete feature
<details>
    <summary>Expand for hints on updating the toggle complete feature.</summary>

    1. Build a function to update an individual task (toggling it's `isComplete` field) in `App`.  
        - This function will need the `id` of the task to modify.
        - This function will need to update the task data stored in state.
    2. Pass this function as a callback through `TaskList` to `Task`
    3. Update button to receive the callback function in the `onClick` attribute.

</details>

## Delete Feature
<details>
    <summary>Expand for hints on implementing the delete feature.</summary>

    1. Build function to delete an individual task in `App`. 
        - This function will need the `id` of the task to delete.
        - This function will need to update the task data stored in state.
    2. Pass this function as a callback through `TaskList` to `Task`
    3. Update button to receive the callback in `onClick` attribute.

</details>





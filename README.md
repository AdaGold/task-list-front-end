# Task List React Livecode

In this livecode, we will be working with state & events in React.  Then we will use the `useEffect` hook to update state from an API and persist state to an API with events.

## Learning Goals

The goals of this live code are to:

- Gain an ability to use State in a React component and pass information to other components via props
- Use the `useEffect` hook to update state after the component first mounts
- Use `axios` to make API calls to update state
- Write controlled form components

## Part 1

### Wave 01: Components and Props
### Wave 02: State and Event Handling
### Wave 03:  Lifting state up

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

## Part 2

### Wave 4:  useEffect And Axios

Next we will add the [`axios`](https://github.com/axios/axios) library to our project.  We will use this library to make a request to our API to get the list of tasks.

When the user deletes or updates a task we will make calls to the API to update the list of tasks.

### API EndPoints:

The API is active on Heroku at [`https://adas-task-list.herokuapp.com`](https://adas-task-list.herokuapp.com).

| Verb  | Path  | Body of Request | What it does  |
|---|---|---|---|
| `GET`  | `/tasks`  | None | Retrieves a list of tasks  |
| `PATCH`  | `/tasks/<task_id>/complete`  | None  | Marks a task complete   |
| `PATCH`  | `/tasks/<task_id>/incomplete`  | None  | Marks a task incomplete   |
| `POST`  | `/tasks`  | `{ title: titleText, completed_at: (date or null), description: '' }`  | Creates a new Task   |
| `DELETE`  | `/tasks/<task_id>`  | None  | Deletes a task |

### Make Axios requests in `App.js`

We will:

- use the `useEffect` hook to make an API call to get the list of tasks initially.
- update the callback functions to allow us to delete or update tasks.

## Wave 5: Adding a Form

In this lesson we will add a new component to our App.  `TaskForm`.  In this component users will be able to add a new task to the list, persisting the data to the API.

## Notes on Tests

We have added tests to the project for students to investigate at their own dicretion.  They are not required to understand or learn about lifting state, useEffect, APIs or controlled forms.

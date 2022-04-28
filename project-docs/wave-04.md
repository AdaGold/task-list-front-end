# Wave 04:  useEffect And Axios

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
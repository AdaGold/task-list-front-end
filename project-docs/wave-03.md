# Wave 03:  useEffect And Axios

**Learn Topics: useEffect and Calling APIs required for this wave**

In Wave 03 we will add the [`axios`](https://github.com/axios/axios) library to our project.  We will use this library to make a request to our API to get the list of tasks.

When the user deletes or updates a task we will make calls to the API to update the list of tasks.

## Make Axios requests in `App.js`

Create or refactor the following features to connect the Task List Front End to the Task List Back End (Task List API)

- In the `App`, use the `useEffect` hook to make an API call to get the list of tasks from the database when the React app is loaded.
- Update the `toggleCompleteTask` callback function (the function that toggles the state of completion; you may have named it something different) in the `App` such that marking a task complete or incomplete in the front end makes a change to the state of the task in the database. 
- Update the `deleteTask` callback function (the function that deletes a task; you may have named it something different) in the `App` such that deleting a task in the front end deletes the task from the database. 

## API Endpoints:

There is an API active on Heroku at [`https://task-list-api-c17.herokuapp.com`](https://task-list-api-c17.herokuapp.com).

The source code for this Task List API is available on the [`c17/solution` branch](https://github.com/adagold/task-list-api/tree/c17/solution)

Detailed specifications for the Task List API can be reviewed in the [Task List API README](https://github.com/adagold/task-list-api/)

You may also use your deployed version of Task List API. If you are using your own Task List API, you will need to update it to handle CORS (see below).

We can see a summary of the API endpoints that we will work with for the front end features below:

| Verb  | Path  | Body of Request | What it does  |
|---|---|---|---|
| `GET`  | `/tasks`  | None | Retrieves a list of tasks  |
| `PATCH`  | `/tasks/<task_id>/mark_complete`  | None  | Marks a task complete   |
| `PATCH`  | `/tasks/<task_id>/mark_incomplete`  | None  | Marks a task incomplete   |
| `POST`  | `/tasks`  | `{ title: titleText, description: '' }` <br> optional key: `completed_at: (date or null)`  | Creates a new Task   |
| `DELETE`  | `/tasks/<task_id>`  | None  | Deletes a task |

### Cross-Origin Resource Sharing (CORS)

The deployed Task List API uses the package [`flask-cors`](https://flask-cors.readthedocs.io/en/latest/) to handle Cross Origin Resource Sharing.

The `__init__.py` file uses the `flask-cors` package as viewed [here](https://github.com/AdaGold/task-list-api/blob/c17/solution/app/__init__.py)

If you would like to use your Task List API with this project, you will need to make the changes for `flask-cors` in the example below and re-deploy your Task List backend with the updates.

  
```python
# __init__.py

from flask_cors import CORS
  
...
  
def create_app(test_config=None):
    app = Flask(__name__)
    CORS(app)
    app.config['CORS_HEADERS'] = 'Content-Type'
  
  ...
```




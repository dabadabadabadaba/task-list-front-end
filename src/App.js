import { useEffect, useState } from 'react';
import axios from 'axios';

import React from 'react';
import TaskList from './components/TaskList.js';
import './App.css';

// const INITIAL_TASKS = [
//   {
//     id: 1,
//     title: 'Mow the lawn',
//     isComplete: false,
//   },
//   {
//     id: 2,
//     title: 'Cook Pasta',
//     isComplete: true,
//   },
// ];

const App = () => {
  // const initialCopy = INITIAL_TASKS.map((task) => {
  //   return { ...task };
  // });
  const URL = 'https://task-list-api-c17.herokuapp.com/tasks';

  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const taskAPICopy = response.data.map((task) => {
          return {
            ...task,
            isComplete: task.is_complete,
          };
        });
        setTasksList(taskAPICopy);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const updateComplete = (taskId, updatedComplete) => {
    console.log('updateComplete called');
    const newTasksList = [];
    let mark = 'mark_incomplete'; // incomplete is requested (false) -> mark incomplete
    if (updatedComplete) {
      mark = 'mark_complete'; // complete is requested (true) -> mark complete
    }
    axios
      .patch(`${URL}/${taskId}/${mark}`)
      .then((response) => {
        for (const task of tasksList) {
          if (task.id != taskId) {
            newTasksList.push(task);
          } else {
            console.log(updatedComplete);
            const newTask = {
              ...task,
              isComplete: updatedComplete,
            };
            newTasksList.push(newTask);
          }
        }
        setTasksList(newTasksList);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteTask = (taskId) => {
    console.log('deleteTask called');

    axios
      .delete(`${URL}/${taskId}`)
      .then(() => {
        const newTasksList = [];
        for (const task of tasksList) {
          if (task.id !== taskId) {
            newTasksList.push(task);
          }
        }
        setTasksList(newTasksList);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Ada&apos;s Task List</h1>
      </header>
      <main>
        <div>
          {
            <TaskList
              tasks={tasksList}
              updateComplete={updateComplete}
              deleteTask={deleteTask}
            />
          }
        </div>
      </main>
    </div>
  );
};

export default App;

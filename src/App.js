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
  const URL = 'https://task-list-api-c17.herokuapp.com';

  const [tasksList, setTasksList] = useState([]);

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        console.log('this is response.data', response.data);
        const taskAPICopy = response.map((task) => {
          return {
            ...task,
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
    for (const task of tasksList) {
      if (task.id != taskId) {
        newTasksList.push(task);
      } else {
        const newTask = {
          ...task,
          isComplete: updatedComplete,
        };
        newTasksList.push(newTask);
      }
    }
    setTasksList(newTasksList);
  };

  const deleteTask = (taskId) => {
    console.log('deleteTask called');
    const newTasksList = [];
    for (const task of tasksList) {
      if (task.id !== taskId) {
        newTasksList.push(task);
      }
    }
    setTasksList(newTasksList);
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

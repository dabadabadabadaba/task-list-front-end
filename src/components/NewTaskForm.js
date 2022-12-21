import React, { useState } from 'react';
import './NewTaskForm.css';

const TEST_TASKS = [
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

const NewTaskForm = () => {
  const [formData, setFormData] = useState(TEST_TASKS);

  const handleChange = (e) => {
    console.log('handleChange called');
    console.log(
      `Target name: ${e.target.name} Target value: ${e.target.value}`
    );

    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value,
    };
    setFormData(newFormData);
  };

  return (
    <form>
      <label htmlFor="title">Task</label>
      <input
        type="text"
        name="title"
        id="title"
        value={formData.title}
        onChange={handleChange}
      />

      <label htmlFor="description">Description</label>
      <input
        type="text"
        name="description"
        id="description"
        value={formData.description}
        onChange={handleChange}
      />

      <input type="submit" value="Add Task" />
    </form>
  );
};

export default NewTaskForm;

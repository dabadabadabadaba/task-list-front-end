# Wave 01: Setup and Baseline

**Learn Topics: React Components, Props, and State & Event Handling required for this wave**

## Setup

Use the following steps to get started:

1. One team member should fork and clone the repository.
1. Add other team member(s) as collaborators in GitHub
1. Run `yarn install` to install dependencies.
1. Run `yarn start` to run the local development server.

## Baseline

In Wave 01, we will explore the starter code for Task List Front End.

Read through the code in `App.js`, `TaskList.js` and `Task.js` and their style sheets to understand how data and events are being handled. You may use the following questions and suggestions to guide your exploration:

1. What `props` does `Task` have? Where do they come from?
   `A: Task has id, title and isComplete, the props are coming from Tasklist.js`
  
2. The `Task` component uses destructuring to read in the props `const Task = ({ id, title, isComplete }) => {...`
    - How would the code change if `{id, title, isComplete}` were replaced with `props`? 
      `A: we would have to use 'props.isComplete' instead and 'props.title' instead`
    - Consider making this change and the subsequent necessary changes through the rest of the component to deepen your understanding of the code.
3. How is the ~~strikethrough~~ style applied when the task title is clicked? `A: The tasks are actually buttons and there's a ternary in line 8 of Task.js`
    - Consider updating the appropriate rule sets to change the text or background color when a task is marked complete.
4. What `props` does `TaskList` have? Where do they come from? `A: The props are id, title and isComplete. They come from App.js, specifically from the constant "TASKS"`
5. Where is the function `getTaskListJSX` called in `TaskList`? `It's being called on line 19, which is a return of an unordered list with all the tasks`
    - How would the code change without this helper function?`We replaced the helper function with the actual content of the function and it worked!`
6. What component is `TASKS` passed to in `App`? `TASKS is passed to Tasklist`
    - How does the component pass `TASKS`? `it's passed as a 'props'`
    - What element is the component wrapped in?` it's wrapped in <div></div>`

The suggestions above should give you a strong foundation for working with Task List Front End. As time allows, follow your curiosity to explore more of the code and features.









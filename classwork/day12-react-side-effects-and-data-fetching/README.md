# Day 12: Side Effects & Data Fetching

In today's codealong session, we will cover the important concept of side effects in React, particularly focusing on data fetching. We'll use the `json-server` package to simulate a backend API and the `fetch` API to get and post data. We'll also introduce async/await syntax and Promises, which are essential for handling asynchronous operations in JavaScript.

## Learning Objectives

By the end of this lesson, you should be able to:

- Install and use `json-server` to create a mock API
- Understand and use `fetch`, async/await syntax, and Promises for data fetching
- Understand and use the `useEffect` hook for side effects
- Add persistence to form inputs
- Understand how to add and remove event listeners in a React component

## React Docs to Review

To start, we're going to review the React docs on [Synchronizing with Effects](https://react.dev/learn/synchronizing-with-effects).

## Project Setup

### Task 1: Install `json-server`

Json-server allows us to create a fake API for development and prototyping. To install `json-server`, we will use the following command:

```bash
npm install -g json-server
```

The `-g` flag installs the package globally, meaning it can be accessed from anywhere on your machine.

We can use the `json-server` in the terminal to start an mock API backend server that will accept and return JSON data.

### Task 2: Add a `db.json` file

In the root of your project, create a new file called `db.json`. This will serve as our database for the mock API.

In `db.json`, add the jobs array from your application state. It should look something like this:

```json
{
  "jobs": [
    {
      "id": 1,
      "image": {
        "src": "https://media.licdn.com/dms/image/C4E0BAQEiY07GSLZtFQ/company-logo_100_100/0/1539023176649?e=1694649600&v=beta&t=-vb-4kpBSDXQ36ou1Rk95RbdCiQO4kYGzGEFsnqhRg4",
        "alt": "Aha! company logo"
      },
      "company": "Aha!",
      "title": "Ruby on Rails Engineer",
      "minSalary": 100000,
      "maxSalary": 160000,
      "location": "Philadelphia, PA (Remote)",
      "postDate": "2023-06-17",
      "jobPostUrl": "https://www.linkedin.com/jobs/view/3638618757",
      "applicationDate": null,
      "lastContactDate": null,
      "companyContact": null,
      "status": 1
    },
    {
      "id": 2,
      "image": {
        "src": "https://media.licdn.com/dms/image/C560BAQFSVDtroiTPVg/company-logo_100_100/0/1662729127883?e=1694649600&v=beta&t=z8CL4Gnp_srDR0UYgOE7nwIQKp10vghZDjQwm2CGGBE",
        "alt": "Jobot company logo"
      },
      "company": "Jobot",
      "title": "Remote Front End Developer",
      "minSalary": 120000,
      "maxSalary": 200000,
      "location": "Los Angeles, CA (Hybrid)",
      "postDate": "2023-06-24",
      "jobPostUrl": "https://www.linkedin.com/jobs/view/3643460386",
      "applicationDate": null,
      "lastContactDate": null,
      "companyContact": null,
      "status": 1
    },
    {
      "id": 3,
      "image": {
        "src": "https://media.licdn.com/dms/image/C560BAQHbQYFSQsK__A/company-logo_100_100/0/1630511737707?e=1694649600&v=beta&t=Fa--go1eHlnSUYJLWyR07kb7Mfb5yp4upQyQUyUcBKQ",
        "alt": "Braintrust Company Logo"
      },
      "company": "Braintrust",
      "title": "Software Engineer - Freelance (REMOTE)",
      "minSalary": 50000,
      "maxSalary": 90000,
      "location": "New York, NY (Remote)",
      "postDate": "2023-06-20",
      "jobPostUrl": "https://www.linkedin.com/jobs/view/3641063402",
      "applicationDate": null,
      "lastContactDate": null,
      "companyContact": null,
      "status": 2
    },
    {
      "id": 4,
      "image": {
        "src": "https://media.licdn.com/dms/image/C4D0BAQEq6OEw509HRQ/company-logo_100_100/0/1519952238666?e=1694649600&v=beta&t=Bv3329fHJDl0SMfrnUZ4stRoZnLrb0JfYI6u1hQbkZU",
        "alt": "Underdog Company Logo"
      },
      "company": "Underdog.io",
      "title": "Frontend Engineer",
      "minSalary": 88000,
      "maxSalary": 192000,
      "location": "New York, United States (On site)",
      "postDate": "2023-06-19",
      "jobPostUrl": "https://www.linkedin.com/jobs/view/3639725859",
      "applicationDate": null,
      "lastContactDate": null,
      "companyContact": null,
      "status": 2
    }
  ]
}
```

When we run `json-server` the API server will be running on http://localhost:3000. So, there will be jobs available in the browser at http://localhost:3000/jobs.

### Task 3: Implement `fetch` functions

Next, we need to fetch data from our API. We'll use the `fetch` function built into modern browsers and the async/await syntax. 

Async/await is a way to handle Promises in JavaScript. A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

Here's an example of a function that fetches our jobs data:

```jsx
async function fetchJobs() {
  const response = await fetch('http://localhost:3000/jobs');
  const jobs = await response.json();
  return jobs;
}
```


### Task 4: Implement the `useEffect` hook to fetch jobs

React's `useEffect` hook allows us to perform side effects in function components. Side effects are anything that interacts with the world outside of the component (like data fetching, timers, logging, etc.).

Here's how we can use `useEffect` to fetch our jobs when the component mounts:

```jsx
import { useEffect, useState } from 'react';

function App() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    async function fetchJobs() {
      const response = await fetch("http://localhost:3000/jobs"); // get response
      const jobs = await response.json(); // parse response body text (make it an array instead of a string)
      setJobs(jobs);
    }

    fetchJobs();
  }, [])
  
  // ...
}
```

### Task 5: Implement the `useEffect` hook to add a keyboard event listener

We can use the `useEffect` hook to add a keyboard event listener that will close our modal when the Escape key is pressed. The `useEffect` hook can also return a function that will be called when the component unmounts, which we can use to remove our event listener:

```jsx
import { useEffect } from 'react';

function Modal({ isVisible, hideModal }) {
  useEffect(() => {
    const handleEscape = (event) => {
      if(event.key === 'Escape') {
        hideModal();
      }
    };

    window.addEventListener('keydown', handleEscape);

    return () => window.removeEventListener('keydown', handleEscape);
  }, [hideModal]);
  
  if(!isVisible) { return null; }
  return (
    <div>Modal Code</div>
  )
  // ...
}
```

### Task 6: Add persistence to the job posting form

Finally, we'll modify our form so that when a new job posting is submitted, it's saved to our database. We'll do this by making a POST request with the new job data:

```jsx
const handleAddJobFormSubmit = async (e) => {
  e.preventDefault();
  // modal should close
  // form should clear
  setJobFormState(initialJobFormState);
  // new job should be added to the DOM
  const preparedJob = {
    ...jobFormState,
    minSalary: parseInt(jobFormState.minSalary),
    maxSalary: parseInt(jobFormState.maxSalary),
    status: 1,
  };
  // send request to save job to db and get response
  const response = await fetch("http://localhost:3000/jobs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(preparedJob),
  });
  console.log('response', response);
  const savedJob = await response.json();
  console.log('savedJob', savedJob);
  onAddJob(savedJob);
};
```

## Additional Resources

- [MDN Web Docs: Using Fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN Web Docs: async function](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [MDN Web Docs: Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [React Docs: useEffect](https://reactjs.org/docs/hooks-effect.html)
- [json-server](https://github.com/typicode/json-server)
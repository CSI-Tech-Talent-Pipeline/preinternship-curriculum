## Tasks for Update and Delete

- Add the `react-icons` library for edit/delete UI elements
- Add a `Link` to edit a job to the `job` component
- Create the editJob component and add the edit page UI
- Add a job loader
- Add the new editJob route
- Add a link to the new editJob route to the `job` component
- Updating jobs with form data
  - Add an action to the edit module


## Add the `react-icons` library for edit/delete UI elements

Install the package with the following command.
```bash
npm install react-icons
```

Now, we can import icons from popular icon libaries directly into our project as react components. [See the docs](https://react-icons.github.io/react-icons/) for examples and to search the available icons.

## Add a `Link` to edit a job to the `job` component
We'll want a pencil icon for our edit link 

```jsx
import { FaPencil } from "react-icons/fa";
```

> Note when importing icons from this library, the first portion of the component name indicates the library from which the icon is taken. These first two letters must match the end of the import path. In this case, we import from `"react-icons/fa"` because our Icon component begins with `Fa`.


```jsx
// src/routes/job.jsx
// ...
<p>Job posted on: {postDate}</p>
<div className="flex my-2">
  <Link
    to={`/jobs/${id}/edit`}
    className="flex items-center gap-2 bg-blue-400 p-2 rounded-sm"
  >
    <FaPencilAlt /> Edit
  </Link>
</div>
// ...
```

### Create the edit component and add the edit page UI

This will be the form to edit a job application
```jsx
// src/routes/editJob.jsx
import { Form, useLoaderData } from "react-router-dom";

function EditJob() {
  const { job } = useLoaderData();
  return (
    <Form method="post" className="selection:bg-blue-200 flex flex-col gap-2">
      <h1 className="text-white">Edit Job Posting</h1>

      <fieldset className="flex flex-col">
        <label htmlFor="title">Job Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="border-4 focus:outline-none p-2"
          defaultValue={job.title}
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="minSalary">Salary Range</label>
        <div className="flex gap-2 items-center justify-between">
          <input
            type="number"
            name="minSalary"
            id="minSalary"
            className="w-[47%] border-4 focus:outline-none p-2"
          />{" "}
          -
          <input
            type="number"
            name="maxSalary"
            id="maxSalary"
            className="w-[47%] border-4 focus:outline-none p-2"
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="postDate">postDate</label>
        <input
          type="date"
          name="postDate"
          id="postDate"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="jobPostURL">Original Job Post URL</label>
        <input
          type="url"
          name="jobPostURL"
          id="jobPostURL"
          className="border-4 focus:outline-none p-2"
        />
      </fieldset>
      <input
        className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
        type="submit"
      ></input>
    </Form>
  );
}

export default EditJob
```


### Add the new edit route


```jsx
// src/main.jsx

/* existing code */
import EditJob from "./routes/editJob";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <JobList />,
        loader: jobLoader,
      },
      {
        path: "jobs/new",
        element: <AddJobForm />,
        action: addJobAction,
      },
      {
        path: "jobs/byStatus/:status",
        element: <JobList />,
        loader: jobLoader,
      },
    ],
  },
  {
    path: "jobs/:jobId",
    element: <Job />,
    errorElement: <ErrorPage />,
    loader: jobDetailLoader,
    action: notesAction,
  },
  {
    path: "jobs/:jobId/edit",
    element: <EditJob />,
    errorElement: <ErrorPage />,
    loader: editJobLoader
  },
]);
```

### Add a job loader

```jsx
// src/routes/editJob.jsx
export async function loader({ params }) {
  const jobResponse = await fetch(`http://localhost:3000/jobs/${params.jobId}`);
  const job = await jobResponse.json();
  return { job };
}
```

import the loader and connect it to the route:

```jsx
import EditJob, { loader as editJobLoader } from "./routes/editJob";
// ...

{
  path: "edit",
  element: <EditJob />,
  loader: editJobLoader
},
```

## Updating jobs with form data


### Add an action to the edit module

```jsx
import { Form, useLoaderData, redirect } from "react-router-dom";

export async function action({ request, params }) {
  const formData = await request.formData();
  const updates = Object.fromEntries(formData);
  const response = await fetch(`http://localhost:3000/jobs/${params.jobId}`, { 
    method: "PATCH", 
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(updates);
  })
  
  return redirect(`/jobs/${params.jobId}`)
}
```

### Wire up the action to the edit route

```jsx
// src/main.jsx

/* existing code */
import EditJob, { action as editJobAction } from "./routes/editJob";

const routes = createBrowserRouter([
  // ...
  
  {
    path: "jobs/:jobId",
    element: <Job />,
    errorElement: <ErrorPage />,
    loader: jobDetailLoader,
    action: notesAction,
    children: [
      {
        path: "",
        element: <NotesList />,
        loader: jobDetailLoader
      },
      {
        path: "/edit",
        element: <EditJob />,
        loader: jobEditLoader,
        action: editJobAction
      },
    ]
  }
])

```

### Adding a Global Pending state

```jsx
// src/routes/root.jsx
...
<div className="transition-opacity opacity-100">
<Outlet />
</div>
```

```jsx
// src/routes/root.jsx
import {
  // existing code
  useNavigation,
} from "react-router-dom";
import classNames from "classnames"

function Root() {
  // ...
  const navigation = useNavigation();
}
// create
const outletClasses = classNames("transition-opacity", {
  "opacity-100": navigation.state !== "loading",
  "opacity-50": navigation.state === "loading"
})
```

## Resources 
- [React Icons](https://react-icons.github.io/react-icons/)
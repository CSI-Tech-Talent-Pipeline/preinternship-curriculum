## Todos for Job Application Tracker

- install react-router dom: `npm install react-router-dom`
- create a src/routes directory
- create src/routes/root.jsx 
  - it should have our navigation bar and an outlet for
- 👉 Set <Root> as the root route's element
- handle not found errors (create src/not-found.jsx)
- set the not found component as the errorElement for the root route

create src/routes/root.jsx 

```jsx
const statuses = {
  1: "Bookmarked",
  2: "Applying",
  3: "Applied",
  4: "Interviewing",
  5: "Negotiating",
  6: "Accepted",
};

function Root() {
  return (
    <div className="mx-auto max-w-4xl px-8">
      <h1>Job Application Tracker</h1>
    </div>
  );
}

export default Root;
```

Set <Root> as the root route's element

```jsx
// src/main.jsx
import Root from "./routes/root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
```

handle not found errors

```jsx
// src/not-found.jsx
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
```

set the not found component as the errorElement for the root route






Resources:

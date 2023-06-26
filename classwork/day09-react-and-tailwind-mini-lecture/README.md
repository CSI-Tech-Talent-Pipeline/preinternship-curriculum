# Mini-Lecture: Setting up Tailwind CSS in a React Project

## SWBAT

- Set up Tailwind CSS in a Vite + React project
- Understand basic Tailwind CSS utility classes
- Implement simple styling in a React component using Tailwind CSS

## Agenda

1. Introduction to Tailwind CSS
2. Setting up Tailwind CSS in a Vite + React project
3. Styling a React component using Tailwind CSS
4. Exploring more complex Tailwind CSS utilities

### Introduction to Tailwind CSS (5 minutes)

#### What is Tailwind CSS?

- A utility-first CSS framework for rapidly building custom user interfaces
- Instead of pre-designed components, Tailwind provides low-level utility classes
- It allows you to build any design directly in your markup

### Setting up Tailwind CSS in a Vite + React project (15 minutes)

Here's how you can set up Tailwind CSS in your project:

1. Install Tailwind via npm (from the job-app-tracker directory in your terminal)

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```

2. Create a `tailwind.config.js` file and `postcss.config.js` file in your root directory

```bash
npx tailwindcss init -p
```

3. In the `tailwind.config.js` file, configure the purge option to remove unused styles in production:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
```
You can leave the postcss config file as is.


4. Include Tailwind in your CSS:

```css
/* ./src/index.css */
@tailwind base;
@tailwind components;
@tailwind utilities;
```

There's an unknown `@` rule warning that comes up in the editor, here's [an article](https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/) you can use with steps to resolve the issue. I went through the steps on [Installing the TailwindCSS Intellisense plugin](https://www.codeconcisely.com/posts/tailwind-css-unknown-at-rules/#installing-tailwind-css-intellisense-plugin) and focusing on the `index.css` file to resolve the issue in my workspace.

5. run `npm run dev` in your terminal

6. Use some tailwind classes in a component:

```jsx
// in src/App.jsx
<div className="mx-auto max-w-4xl">
    <h1>Job Application Tracker</h1>
    {jobCards}
</div>
```

Now, Tailwind CSS is set up and ready to be used in your project!

### Styling a React Component using Tailwind CSS (15 minutes)

So, we can also rework the `JobCard` component to use utility classes instead of our semantic classes:

```js
// in src/JobCard.jsx
<div className="flex items-start content-start gap-4 my-6">
  <img src={src} alt={alt} />
  <div>
    <h2 className="text-xl font-bold relative -top-1.5">{title}</h2>
    <p className="mb-2 text-gray-400">{company}</p>
    <ul className="text-sm">
      <li>{location}</li>
      <li>{salary}</li>
      <li>{postDate}</li>
    </ul>
  </div>
</div>
```

With Tailwind, you can add classes for things like padding, margin, background color, text color, and more directly in your JSX.

### Exploring More Complex Tailwind CSS Utilities (10 minutes)

Tailwind includes utilities for many other CSS features, like:

- Flexbox: `flex`, `justify-center`, `items-center`, etc.
- Grid: `grid`, `grid-cols-3`, etc.
- Position: `relative`, `absolute`,
`fixed`, etc.
- Typography: `font-bold`, `text-center`, `underline`, etc.
- And many more!

Let's add some more complex styles to our `JobList` component:

```jsx
// JobList.js
import React from 'react';

const JobList = () => {
    const jobs = [
        { title: 'Software Engineer', company: 'Google' },
        { title: 'Product Manager', company: 'Amazon' },
        { title: 'Data Scientist', company: 'Microsoft' }
    ];

    return (
        <div className="p-4 flex flex-col items-center">
            {jobs.map((job, index) => (
                <div key={index} className="bg-blue-100 m-2 p-4 rounded shadow-lg w-1/2">
                    <h2 className="text-blue-500 text-xl font-bold">{job.title}</h2>
                    <h3 className="text-blue-300 italic">{job.company}</h3>
                </div>
            ))}
        </div>
    );
};

export default JobList;
```

In this example, we use `flex`, `flex-col`, and `items-center` to center the job cards. We also use `w-1/2` to set the width of the cards to 50% of the container. `shadow-lg` adds a large shadow to the cards, and `font-bold` and `italic` change the typography of the job titles and companies.

With these changes, our `JobList` component looks much better, and it's all thanks to Tailwind CSS!

## Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Tailwind CSS Installation Guide](https://tailwindcss.com/docs/installation)
- [Tailwind CSS Utility Classes](https://tailwindcss.com/docs/utility-first)
- [Vite Documentation](https://vitejs.dev/guide/)

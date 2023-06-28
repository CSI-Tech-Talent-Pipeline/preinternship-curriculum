import { useState } from "react";

function AddJobForm({ onAddJob }) {
  const [jobFormState, setJobFormState] = useState({
    title: "",
    company: "",
    location: "",
    minSalary: 0,
    maxSalary: 0,
    postDate: "",
    jobPostURL: "",
  });

  const {
    title,
    company,
    location,
    minSalary,
    maxSalary,
    postDate,
    jobPostURL,
  } = jobFormState;

  const handleInputChange = (e) => {
    setJobFormState((jobFormState) => {
      return {
        ...jobFormState,
        [e.target.name]: e.target.value,
      };
    });
  };

  const handleAddJobSubmit = (e) => {
    e.preventDefault();
    onAddJob(jobFormState);
    setJobFormState({
      title: "",
      company: "",
      location: "",
      minSalary: 0,
      maxSalary: 0,
      postDate: "",
      jobPostURL: "",
    });
  };

  return (
    <form
      onSubmit={handleAddJobSubmit}
      className="selection:bg-blue-200 flex flex-col gap-2"
    >
      <h1>Add Job Posting</h1>
      <fieldset className="flex flex-col">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          className="bg-white border-4 focus:outline-none p-2"
          onChange={handleInputChange}
          value={title}
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="company">Company</label>
        <input
          type="text"
          name="company"
          id="company"
          className="bg-white border-4 focus:outline-none p-2"
          onChange={handleInputChange}
          value={company}
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="location">Location</label>
        <input
          type="text"
          name="location"
          id="location"
          className="bg-white border-4 focus:outline-none p-2"
          onChange={handleInputChange}
          value={location}
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="minSalary">Salary Range</label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            name="minSalary"
            id="minSalary"
            className="bg-white border-4 focus:outline-none p-2"
            onChange={handleInputChange}
            value={minSalary}
          />{" "}
          -
          <input
            type="number"
            name="maxSalary"
            id="maxSalary"
            className="bg-white border-4 focus:outline-none p-2"
            onChange={handleInputChange}
            value={maxSalary}
          />
        </div>
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="postDate">postDate</label>
        <input
          type="date"
          name="postDate"
          id="postDate"
          className="bg-white border-4 focus:outline-none p-2"
          onChange={handleInputChange}
          value={postDate}
        />
      </fieldset>
      <fieldset className="flex flex-col">
        <label htmlFor="jobPostURL">Original Job Post URL</label>
        <input
          type="text"
          name="jobPostURL"
          id="jobPostURL"
          className="bg-white border-4 focus:outline-none p-2"
          onChange={handleInputChange}
          value={jobPostURL}
        />
      </fieldset>
      <input
        className="mt-4 bg-blue-500 hover:bg-blue-600 transition cursor-pointer py-2 text-white"
        type="submit"
      />
    </form>
  );
}

export default AddJobForm;
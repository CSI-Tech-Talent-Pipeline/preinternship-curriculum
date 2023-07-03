import { Form, useLoaderData, Link } from "react-router-dom";

export async function loader({ params }) {
  const jobResponse = await fetch(`http://localhost:3000/jobs/${params.jobId}`);
  const job = await jobResponse.json();
  return { job };
}

function EditJob() {
  const { job } = useLoaderData();
  return (
    <div className="max-w-4xl mx-auto p-8">
      <Link to={`/jobs/${job.id}`}>{"<"} Back</Link>
      <Form
        method="post"
        className="selection:bg-blue-200 flex flex-col gap-2"
      >
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
            defaultValue={job.company}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="location">Location</label>
          <input
            type="text"
            name="location"
            id="location"
            className="border-4 focus:outline-none p-2"
            defaultValue={job.location}
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
              defaultValue={job.minSalary}
            />{" "}
            -
            <input
              type="number"
              name="maxSalary"
              id="maxSalary"
              className="w-[47%] border-4 focus:outline-none p-2"
              defaultValue={job.maxSalary}
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
            defaultValue={job.postDate}
          />
        </fieldset>
        <fieldset className="flex flex-col">
          <label htmlFor="jobPostUrl">Original Job Post URL</label>
          <input
            type="url"
            name="jobPostUrl"
            id="jobPostUrl"
            className="border-4 focus:outline-none p-2"
            defaultValue={job.jobPostUrl}
          />
        </fieldset>
        <input
          className="bg-blue-500 hover:bg-blue-600 text-white transition mt-4 py-2 cursor-pointer "
          type="submit"
        ></input>
      </Form>
    </div>
  );
}

export default EditJob

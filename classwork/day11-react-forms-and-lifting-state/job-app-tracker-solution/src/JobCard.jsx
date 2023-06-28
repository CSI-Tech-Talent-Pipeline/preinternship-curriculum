import { PropTypes } from "prop-types";

function JobCard({ job }) {
  // pull data from argument
  const {
    id,
    image,
    company,
    title,
    minSalary,
    maxSalary,
    location,
    postDate,
    jobPostUrl
  } = job;

  return (
    <div data-testid="job-card" className="flex items-start gap-4 mb-13">
      {image ? <img className="w-[100px]" src={image.src} alt={image.alt} /> : <img src="https://via.placeholder.com/100x100" alt="No company logo available" />}
      <div>
        <h2 className="text-xl font-bold relative -top-1.5">
          <a href={jobPostUrl} target="_blank" rel="noreferrer">{title}</a>
        </h2>
        <p className="text-gray-400 italic mb-2">{company}</p>
        <ul className="text-sm">
          <li>{location}</li>
          <li>{`$${minSalary} - $${maxSalary}`}</li>
          <li>{postDate}</li>
        </ul>
      </div>
    </div>
  );
}

JobCard.propTypes = {
  job: PropTypes.shape({
    image: PropTypes.shape({
      src: PropTypes.string,
      alt: PropTypes.string,
    }),
    company: PropTypes.string,
    title: PropTypes.string,
    minSalary: PropTypes.number,
    maxSalary: PropTypes.number,
    location: PropTypes.string,
    postDate: PropTypes.string,
    jobPostUrl: PropTypes.string,
  }),
};

console.log(typeof PropTypes.string)

export default JobCard;
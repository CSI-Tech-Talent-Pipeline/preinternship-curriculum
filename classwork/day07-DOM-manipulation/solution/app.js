const jobs = [
  {
    image: {
      src: "https://media.licdn.com/dms/image/C4E0BAQEiY07GSLZtFQ/company-logo_100_100/0/1539023176649?e=1694649600&v=beta&t=-vb-4kpBSDXQ36ou1Rk95RbdCiQO4kYGzGEFsnqhRg4",
      alt: "Aha! company logo",
    },
    company: "Aha!",
    title: "Ruby on Rails Engineer",
    salary: "$100k/yr - $160k/yr",
    location: "Chicago, IL (Remote)",
    postDate: "1 week ago",
  },
  {
    image: {
      src: "https://media.licdn.com/dms/image/C560BAQGiEbGtjE1o_w/company-logo_100_100/0/1523389063738?e=1694649600&v=beta&t=iWaF1nBxZfqNbg5mnkjkNWIbSAROTrqQrvpxDTEVUBk",
      alt: "Cal State Long Beach Logo",
    },
    company: "California State University, Long Beach",
    title: "Junior Software Developer",
    salary: "$3,713/m - $7,149/m",
    location: "Long Beach, CA (onsite)",
    postDate: "5 days ago",
  },
  {
    image: {
      src: "https://media.licdn.com/dms/image/C560BAQFSVDtroiTPVg/company-logo_100_100/0/1662729127883?e=1694649600&v=beta&t=z8CL4Gnp_srDR0UYgOE7nwIQKp10vghZDjQwm2CGGBE",
      alt: "Jobot company logo",
    },
    company: "Jobot",
    title: "Remote Wordpress Developer",
    salary: "$50/hr - $75/hr",
    location: "Malibu, CA (Hybrid)",
    postDate: "1 week ago",
  },
  {
    image: {
      src: "https://media.licdn.com/dms/image/C560BAQHbQYFSQsK__A/company-logo_100_100/0/1630511737707?e=1694649600&v=beta&t=Fa--go1eHlnSUYJLWyR07kb7Mfb5yp4upQyQUyUcBKQ",
      alt: "Braintrust Company Logo",
    },
    company: "Braintrust",
    title: "Software Engineer - Freelance (REMOTE)",
    salary: "$50/yr - $90/yr",
    location: "New York, NY (Remote)",
    postDate: "1 day ago",
  },
  {
    image: {
      src: "https://media.licdn.com/dms/image/C4D0BAQEq6OEw509HRQ/company-logo_100_100/0/1519952238666?e=1694649600&v=beta&t=Bv3329fHJDl0SMfrnUZ4stRoZnLrb0JfYI6u1hQbkZU",
      alt: "Underdog Company Logo",
    },
    company: "Underdog.io",
    title: "Frontend Engineer - Remote",
    salary: "$88k/yr - $192k/yr",
    location: "New York, United States (Remote)",
    postDate: "2 days ago",
  },
  {
    image: {
      src: "https://media.licdn.com/dms/image/C4E0BAQEiY07GSLZtFQ/company-logo_100_100/0/1539023176649?e=1694649600&v=beta&t=-vb-4kpBSDXQ36ou1Rk95RbdCiQO4kYGzGEFsnqhRg4",
      alt: "Aha! Company Logo",
    },
    company: "Aha!",
    title: "Lead Ruby on Rails Engineer",
    salary: "$120k/yr - $180k/yr",
    location: "Wichita, KS (Remote)",
    postDate: "6 days ago",
  },
];

// console.log(document);
// console.log(document.body);
// console.log(document.getElementById("jobs"));
// console.log(document.getElementById("jobs").id);
// console.log(document.getElementById("jobs").textContent);

const firstJob = document.getElementsByClassName("j-desc")[0];
// console.log(firstJob);

// console.log(firstJob.parentElement); // section#jobs
// console.log(firstJob.children); // HTMLCollection(2) [img.j-desc__company-image, div.j-desc__details]
const secondJob = firstJob.nextElementSibling;
// console.log(secondJob); // <div class="j-desc">...</div>
// console.log(firstJob === secondJob.previousElementSibling);

// console.log(firstJob.lastElementChild.textContent);
// console.log(secondJob.lastElementChild.textContent);

// console.log(firstJob.querySelector(".j-desc__job-title").textContent);
// console.log(secondJob.querySelector(".j-desc__job-title").textContent);

document.querySelectorAll(".j-desc").forEach((jobDiv) => {
  const jobTitle = jobDiv.querySelector(".j-desc__job-title").textContent;
  // console.log(jobTitle);
});

const firstJobImage = firstJob.querySelector(".j-desc__company-image");
// console.log(firstJobImage.getAttribute("alt")); // logs: "Patterned Learning AI"

const firstJobTitle = firstJob.querySelector(".j-desc__job-title");
console.log(firstJobTitle.textContent); // logs: "Junior Front-End Developer"
firstJobTitle.textContent = "Junior Front-End Developer (React)";

firstJobTitle.style.color = "blue";

function createNewJob(job) {
  const jobDiv = document.createElement("div");
  jobDiv.className = "j-desc";
  jobDiv.innerHTML = `
  <img
    class="j-desc__company-image"
  />
  <div class="j-desc__details">
    <h2 class="j-desc__job-title">
      
    </h2>
    <p class="j-desc__company"></p>
    <ul class="j-desc__metadata">
      <li></li>
      <li></li>
      <li></li>
    </ul>
  </div>
  `;

  const imgEl = jobDiv.querySelector("img");
  const titleEl = jobDiv.querySelector(".j-desc__job-title");
  const companyEl = jobDiv.querySelector(".j-desc__company");
  const [locationEl, salaryEl, postDateEl] = jobDiv.getElementsByTagName("li");

  imgEl.setAttribute("src", job.image.src);
  imgEl.setAttribute("alt", job.image.alt);
  titleEl.textContent = job.title;
  companyEl.textContent = job.company;
  locationEl.textContent = job.location;
  salaryEl.textContent = job.salary;
  postDateEl.textContent = job.postDate;

  document.querySelector("section#jobs").appendChild(jobDiv);
}

createNewJob(jobs[3]);
createNewJob(jobs[4]);

// Select the section containing all jobs
// const jobSection = document.querySelector('section');

// // Select the job to remove
// let jobToRemove = document.querySelectorAll('.j-desc')[1]; // second job

// // Remove the job
// jobSection.removeChild(jobToRemove);

// // Select the job to remove
// let jobToRemove = document.querySelectorAll('.j-desc')[1]; // second job

// // Remove the job
// jobToRemove.remove()

const jobTitles = document.getElementsByClassName("j-desc__job-title");

for (let i = 0; i < jobTitles.length; i++) {
  jobTitles[i].onclick = function () {
    alert("You clicked on " + this.textContent);
  };
}

for (let i = 0; i < jobTitles.length; i++) {
  jobTitles[i].onmouseover = function () {
    this.style.color = "red";
  };

  jobTitles[i].onmouseout = function () {
    this.style.color = "";
  };
}

const form = document.getElementById("jobForm");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // prevent browser default behavior

  const jobTitle = document.getElementById("jobTitle").value;
  const companyName = document.getElementById("companyName").value;

  console.log("Job Title: " + jobTitle);
  console.log("Company Name: " + companyName);
});
## Part 4: Server-Side Data Validation with Sequelize

Server-side data validation is crucial for maintaining data integrity and preventing security vulnerabilities. It's an important step in ensuring that we are receiving the type of data we expect from the client-side and that it adheres to the specific rules we define.

Sequelize provides built-in methods for validating data before it gets persisted in the database. This can help prevent invalid or harmful data from being stored in your database.

In this section, we'll enhance our job application API to include server-side validation using Sequelize. The way this is done is by adding a key called `validate` to our model field definitions.

Let's start by updating our model `models/JobApplication.js`:

```javascript
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/database');

class JobApplication extends Model {}

JobApplication.init({
  company: {
    type: DataTypes.STRING,
    allowNull: false, // Requires company to be present
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false, // Requires title to be present
  },
  minSalary: DataTypes.INTEGER,
  maxSalary: {
    type: DataTypes.INTEGER,
    validate: {
      minSalaryLessThanMax(value) {
        if (this.minSalary && value && value < this.minSalary) {
          throw new Error('Maximum salary cannot be less than minimum salary.');
        }
      },
    },
  },
  location: DataTypes.STRING,
  postDate: {
    type: DataTypes.DATEONLY,
    validate: {
      isDate: true, // Ensures postDate is a valid date
      isPast(value) {
        if (value > new Date()) {
          throw new Error('Post date cannot be in the future.');
        }
      },
    },
  },
  jobPostUrl: DataTypes.STRING,
  applicationDate: {
    type: DataTypes.DATEONLY,
    validate: {
      isDate: true, // Ensures applicationDate is a valid date
      isAfterPostDate(value) {
        if (this.postDate && value < this.postDate) {
          throw new Error('Application date cannot be before the post date.');
        }
      },
    },
  },
  lastContactDate: {
    type: DataTypes.DATEONLY,
    validate: {
      isDate: true, // Ensures lastContactDate is a valid date
      isPast(value) {
        if (value > new Date()) {
          throw new Error('Last contact date cannot be in the future.');
        }
      },
    },
  },
  companyContact: DataTypes.STRING,
  status: {
    type: DataTypes.INTEGER,
    allowNull: false, // Requires status to be present
    defaultValue: 1,
    validate: {
      isInt: true, // Ensures status is an integer
      min: 1, // Ensures status is at least 1
      max: 6, // Ensures status is not more than 6
    },
  },
}, {
  sequelize,
  modelName: 'JobApplication',
  underscored: true,
  timestamps: false,
});

module.exports = JobApplication;
```
We have added a few validations:
- `company` and `title` are required fields.
- If both `minSalary` and `maxSalary` are present, `maxSalary` cannot be less than `minSalary`.
- `postDate` cannot be in the future.
- `status` is a required field and must be an integer between 1 and 6.
- If both `postDate` and `applicationDate` are present, `applicationDate` cannot be before `postDate`.
- `lastContactDate` cannot be in the future.

Note that for each of these validations, we added a function that accepts `value` as a parameter. This value represents the value of that column that we're currently validating. Some of them also refer to the `this` keyword. In this case, `this` refers to the object being validated. We use `this` to allow us to access other attributes of the object in the case where we need to validate one field based on the value of another.

Next, we need to handle validation errors in our routes. When a Sequelize validation error occurs, an error of type `SequelizeValidationError` is thrown. We can catch this error and send a response with a 422 status code along with the error message:

Update the post route in `server.js`:

```javascript
app.post("/jobs", async (req, res) => {
  const jobData = req.body;
  try {
    const newJob = await JobApplication.create(jobData);
    res.status(201).json(newJob);
  } catch (err) {
    if (err.name === 'SequelizeValidationError') {
      return res.status(422).json({ errors: err.errors.map(e => e.message) });
    }
    console.error(err);
    res.status(500).json({ message: 'An unexpected error occurred.' });
  }
});
```

This code checks if the error is a `SequelizeValidationError` and, if so, sends a response with a 422 status code along with the validation error messages. This feedback can then be displayed to the user, helping them understand what went wrong with their request.

Repeat this error handling for the edit route (`app.patch("/posts/:id"`) as it is the other that perform operations with Sequelize that will trigger validations.

Server-side validation is an essential part of building a robust and secure API. By implementing these data validation rules, we are ensuring that our application behaves correctly and predictably. It also improves the user experience, as users receive helpful error messages when they submit invalid data.
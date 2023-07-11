'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JobApplication extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JobApplication.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      company: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minSalary: DataTypes.INTEGER,
      maxSalary: {
        type: DataTypes.INTEGER,
        validate: {
          minSalaryLessthanMax(value) {
            if (this.minSalary && value && value < this.minSalary) {
              throw new Error("Maximum salary cannot be less than minimum salary");
            }
          }
        }
      },
      location: DataTypes.STRING,
      postDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isPast(value) {
            if (value > new Date()) {
              throw new Error("Post date cannot be in the future.");
            }
          }
        }
      },
      jobPostUrl: DataTypes.STRING,
      applicationDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isAfterPostDate(value) {
            if (this.postDate && value < this.postDate) {
              throw new Error("Application date cannot be before the post date.")
            }
          }
        }
      },
      lastContactDate: {
        type: DataTypes.DATEONLY,
        validate: {
          isDate: true,
          isPast(value) {
            if (value > new Date()) {
              throw new Error("Last contact date cannot be in the future.");
            }
          }
        }
      },
      companyContact: DataTypes.STRING,
      status: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
          isInt: true,
          min: 1, 
          max: 6
        }
      },
    },
    {
      sequelize,
      modelName: "JobApplication",
      tableName: "job_applications",
      underscored: true,
    }
  );
  return JobApplication;
};
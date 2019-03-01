import React from "react";
import { Field } from "redux-form";
import classnames from "classnames";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";

const AddEducationForm = props => {
  const { handleSubmit, errors, current } = props;
  return (
    <div className="create-profile-form">
      <form onSubmit={handleSubmit}>
        <span className="profile-input-info">* required fields</span>
        <Field
          id="school"
          name="school"
          type="text"
          autoComplete="none"
          placeholder="*School"
          classname={classnames(
            "create-profile-input",
            errors.school && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.school && <div className="invalid">{errors.school}</div>}
        <Field
          id="degree"
          name="degree"
          type="text"
          autoComplete="none"
          placeholder="*Degree"
          classname={classnames(
            "create-profile-input",
            errors.degree && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.degree && <div className="invalid">{errors.degree}</div>}
        <Field
          id="fieldofstudy"
          name="fieldofstudy"
          type="text"
          autoComplete="none"
          placeholder="*Field of study"
          classname={classnames(
            "create-profile-input",
            errors.fieldofstudy && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.fieldofstudy && (
          <div className="invalid">{errors.fieldofstudy}</div>
        )}
        <h6>* From Date</h6>
        <Field
          id="from"
          name="from"
          type="date"
          autoComplete="none"
          placeholder="*From"
          classname={classnames(
            "create-profile-input",
            errors.from && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.from && <div className="invalid">{errors.from}</div>}
        <h6>To Date</h6>
        <Field
          id="to"
          name="to"
          type="date"
          autoComplete="none"
          placeholder="*To"
          classname={classnames(
            "create-profile-input",
            errors.to && "invalid-input"
          )}
          component={CustomInput}
          disabled={current ? 'disabled' : ''}
        />
        <label htmlFor="current">Current</label>
        <Field
          id="current"
          name="current"
          type="checkbox"
          autoComplete="none"
          placeholder=""
          classname=""
          component={CustomInput}
        />

        <Field
          id="description"
          name="description"
          placeholder="description, tell us about your job"
          classname=""
          cols={40}
          rows={10}
          component={CustomTextArea}
        />
        <span className="profile-input-info">
          Tell us a little about your education
        </span>
        <div className="btn-container">
          <button className="btn btn-signup">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default AddEducationForm;

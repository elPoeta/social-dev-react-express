import React from "react";
import { Field } from "redux-form";
import classnames from "classnames";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";

const AddExperienceForm = props => {
  const { handleSubmit, errors, pristine, submitting, current } = props;
  return (
    <div className="create-profile-form">
      <form onSubmit={handleSubmit}>
        <span className="profile-input-info">* required fields</span>
        <Field
          id="title"
          name="title"
          type="text"
          autoComplete="none"
          placeholder="*Job Title"
          classname={classnames(
            "create-profile-input",
            errors.title && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.title && <div className="invalid">{errors.title}</div>}
        <Field
          id="company"
          name="company"
          type="text"
          autoComplete="none"
          placeholder="*Company"
          classname={classnames(
            "create-profile-input",
            errors.company && "invalid-input"
          )}
          component={CustomInput}
        />

        {errors.company && <div className="invalid">{errors.company}</div>}
        <Field
          id="location"
          name="location"
          type="text"
          autoComplete="none"
          placeholder="*Location"
          classname={classnames(
            "create-profile-input",
            errors.location && "invalid-input"
          )}
          component={CustomInput}
        />

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
        <label htmlFor="current">Current Job</label>
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
          Tell us a little about your job
        </span>
        <div className="btn-container">
          <button className="btn btn-signup" disabled={pristine || submitting}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddExperienceForm;

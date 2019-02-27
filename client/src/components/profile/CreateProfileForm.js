import React from "react";
import { Field } from "redux-form";
import classnames from "classnames";
import CustomInput from "../common/CustomInput";
import CustomTextArea from "../common/CustomTextArea";
import CustomSelect from "../common/CustomSelect";

import "./CreateProfile.css";
import "../common/Errors.css";
const CreateProfileForm = props => {
  const { handleSubmit, errors } = props;
  const options = [
    { label: "* Select Professional Status", value: 0 },
    { label: "Developer", value: "Developer" },
    { label: "Junior Developer", value: "Junior Developer" },
    { label: "Senior Developer", value: "Senior Developer" },
    { label: "Full Stack Developer", value: "Full Stack Developer" },
    { label: "DevOps", value: "DevOps" },
    { label: "Student or Learning", value: "Student or Learning" },
    { label: "Instructor or Teacher", value: "Instructor or Teacher" },
    { label: "Other", value: "Other" }
  ];
  return (
    <div className="create-profile-form">
      <form onSubmit={handleSubmit}>
        <Field
          id="handle"
          name="handle"
          type="text"
          autoComplete="none"
          placeholder="My handle profile"
          classname={classnames(
            "create-profile-input",
            errors.handle && "invalid-input"
          )}
          component={CustomInput}
        />
        <span className="profile-input-info">
          A unique handle for your profile URL. Your full name, company name,
          nickname
        </span>
        {errors.handle && <div className="invalid">{errors.handle}</div>}
        <Field
          id="status"
          name="status"
          classname={classnames(
            "create-profile-input",
            errors.status && "invalid-input"
          )}
          options={options}
          component={CustomSelect}
        />
        <span className="profile-input-info">
          Where you are at in your career
        </span>
        {errors.status && <div className="invalid">{errors.status}</div>}
        <Field
          id="company"
          name="company"
          type="text"
          autoComplete="none"
          placeholder="My company"
          classname={"create-profile-input"}
          component={CustomInput}
        />
        <span className="profile-input-info">
          Could be your own company or one you work for
        </span>
        <Field
          id="website"
          name="website"
          type="text"
          autoComplete="none"
          placeholder="My Web Site"
          classname={classnames(
            "create-profile-input",
            errors.website && "invalid-input"
          )}
          component={CustomInput}
        />
        <span className="profile-input-info">
          Could be your own website or a company one
        </span>
        {errors.website && <div className="invalid">{errors.website}</div>}
        <Field
          id="location"
          name="location"
          type="text"
          autoComplete="none"
          placeholder="My location"
          classname={"create-profile-input"}
          component={CustomInput}
        />
        <span className="profile-input-info">
          City or city and country suggested (eg. Buenos Aires, AR)
        </span>
        <Field
          id="skills"
          name="skills"
          type="text"
          autoComplete="none"
          placeholder="Your skills eg: css3,html5,java"
          classname={classnames(
            "create-profile-input",
            errors.skills && "invalid-input"
          )}
          component={CustomInput}
        />
        <span className="profile-input-info">
          Please use comma separated values (eg. HTML,CSS,JavaScript,Java
        </span>
        {errors.skills && <div className="invalid">{errors.skills}</div>}
        <Field
          id="githubuser"
          name="githubuser"
          type="text"
          autoComplete="none"
          placeholder="My github User"
          classname={classnames(
            "create-profile-input",
            errors.githubuser && "invalid-input"
          )}
          component={CustomInput}
        />
        <span className="profile-input-info">
          If you want your latest repos and a Github link, include your username
        </span>
        {errors.githubuser && (
          <div className="invalid">{errors.githubuser}</div>
        )}

        <Field
          id="bio"
          name="bio"
          placeholder="Biography, tell us about yourself..."
          classname=""
          cols={40}
          rows={10}
          component={CustomTextArea}
        />
        <span className="profile-input-info">
          Tell us a little about yourself
        </span>
        <button className="btn btn-signup">Submit</button>
      </form>
    </div>
  );
};

export default CreateProfileForm;

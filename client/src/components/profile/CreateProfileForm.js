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
        <span className="profile-input-info">* required fields</span>
        <Field
          id="username"
          name="username"
          type="text"
          autoComplete="none"
          placeholder="*Profile username"
          classname={classnames(
            "create-profile-input",
            errors.username && "invalid-input"
          )}
          component={CustomInput}
        />
        <span className="profile-input-info">
          A unique username for your profile URL. Your full name, company name,
          nickname
        </span>
        {errors.username && <div className="invalid">{errors.username}</div>}
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
          placeholder="Company"
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
          placeholder="WebSite"
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
          placeholder="Location"
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
          placeholder="*Skills eg: css3,html5,java"
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
          placeholder="GitHub username"
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

        <Field
          id="linkedin"
          name="social.linkedin"
          type="text"
          icon="fab fa-linkedin icon"
          autoComplete="none"
          placeholder="Linkedin Profile URL"
          classname={classnames(
            "create-profile-input",
            errors.linkedin && "invalid-input"
          )}
          component={CustomInput}
        />
        {errors.linkedin && <div className="invalid">{errors.linkedin}</div>}
        <Field
          id="git"
          name="social.git"
          type="text"
          icon="fab fa-git icon"
          autoComplete="none"
          placeholder="Github/Gitlab/Bitbucket Profile URL "
          classname={classnames(
            "create-profile-input",
            errors.git && "invalid-input"
          )}
          component={CustomInput}
        />
        {errors.git && <div className="invalid">{errors.git}</div>}
        <Field
          id="twitter"
          name="social.twitter"
          type="text"
          icon="fab fa-twitter icon"
          autoComplete="none"
          placeholder="Twitter Profile URL"
          classname={classnames(
            "create-profile-input",
            errors.twitter && "invalid-input"
          )}
          component={CustomInput}
        />
        {errors.twitter && <div className="invalid">{errors.twitter}</div>}
        <Field
          id="youtube"
          name="social.youtube"
          type="text"
          icon="fab fa-youtube icon"
          autoComplete="none"
          placeholder="YouTube Channel URL"
          classname={classnames(
            "create-profile-input",
            errors.youtube && "invalid-input"
          )}
          component={CustomInput}
        />
        {errors.youtube && <div className="invalid">{errors.youtube}</div>}
        <Field
          id="facebook"
          name="social.facebook"
          type="text"
          icon="fab fa-facebook icon"
          autoComplete="none"
          placeholder="Facebook Page URL"
          classname={classnames(
            "create-profile-input",
            errors.facebook && "invalid-input"
          )}
          component={CustomInput}
        />
        {errors.facebook && <div className="invalid">{errors.facebook}</div>}
        <div className="btn-container">
          <button className="btn btn-signup">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProfileForm;

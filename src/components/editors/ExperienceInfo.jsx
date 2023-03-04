function ExperienceInfo() {
  return (
    <fieldset className="form-fieldset form__experience-info">
      <legend className="form-legend">Work Experience</legend>

      <label htmlFor="form-input__job-title" className="form-label">
        Title/Position:
        <input
          type="text"
          name="jobTitle"
          id="form-input__job-title"
          className="form-input form-input__job-title"
          placeholder="Junior web developer"
        />
      </label>
      <label htmlFor="form-input__company" className="form-label">
        Workplace/Company/Organization:
        <input
          type="text"
          name="company"
          id="form-input__company"
          className="form-input form-input__company"
          placeholder="Mozilla Inc."
        />
      </label>
      {/* Create list of work done in specifics */}
    </fieldset>
  );
}

export default ExperienceInfo;

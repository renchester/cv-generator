function ExperienceInfo() {
  return (
    <fieldset className="form-fieldset form__experience-info">
      <label className="form-label">
        Title/Position:
        <input
          type="text"
          name="jobTitle"
          className="form-input form-input__job-title"
          placeholder="Junior web developer"
        />
      </label>
      <label className="form-label">
        Workplace/Company/Organization:
        <input
          type="text"
          name="company"
          className="form-input form-input__company"
          placeholder="Mozilla Inc."
        />
      </label>
      <label className="form-label">
        List your duties and specifics in your job:
        <input
          type="text"
          name="jobSpecifics"
          className="form-input form-input__job-specifics"
          placeholder="Mozilla Inc."
        />
      </label>
    </fieldset>
  );
}

export default ExperienceInfo;

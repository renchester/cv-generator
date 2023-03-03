function SkillsInfo() {
  return (
    <fieldset className="form-fieldset form__skills-info">
      <legend className="form-legend">Technical Skills</legend>
      <label htmlFor="form-input__skill-category" className="form-label">
        Add a skill category
        <input
          type="text"
          name="skillCategory"
          id="form-input__skill-category"
          className="form-input form-input__skill-category"
          placeholder="Design"
        />
      </label>
      <label htmlFor="form-input__skill" className="form-label">
        Add a skill in Design Category
        <input
          type="text"
          name="skill"
          id="form-input__skill"
          className="form-input form-input__skill"
          placeholder="Photoshop"
        />
      </label>
    </fieldset>
  );
}

export default SkillsInfo;

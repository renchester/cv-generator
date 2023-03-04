function SkillsInfo() {
  return (
    <fieldset className="form-fieldset form__skills-info">
      <label className="form-label">
        Add a skill category
        <input
          type="text"
          name="skillCategory"
          className="form-input form-input__skill-category"
          placeholder="Design"
        />
      </label>
      <label className="form-label">
        Add a skill in Design Category
        <input
          type="text"
          name="skill"
          className="form-input form-input__skill"
          placeholder="Photoshop"
        />
      </label>
    </fieldset>
  );
}

export default SkillsInfo;

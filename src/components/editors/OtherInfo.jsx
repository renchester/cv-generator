function OtherInfo() {
  return (
    <fieldset className="form-fieldset form__other-info">
      <span>
        Only fill these out if you deem it important <br /> or if your CV
        preview still has space
      </span>
      <label htmlFor="form-input__interests" className="form-label">
        Interests
        <input
          type="text"
          name="interests"
          id="form-input__interests"
          className="form-input form-input__interests"
          placeholder="Design"
        />
      </label>
      <label htmlFor="form-input__languages" className="form-label">
        Languages
        <input
          type="text"
          name="languages"
          id="form-input__languages"
          className="form-input form-input__languages"
          placeholder="English"
        />
      </label>
      <label htmlFor="form-input__awards" className="form-label">
        Awards/Certifications
        <input
          type="text"
          name="awards"
          id="form-input__awards"
          className="form-input form-input__awards"
          placeholder="Design Award"
        />
      </label>
    </fieldset>
  );
}

export default OtherInfo;

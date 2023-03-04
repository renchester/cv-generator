function OtherInfo() {
  return (
    <fieldset className="form-fieldset form__other-info">
      <span>
        Only fill this out if you deem it important or if your CV preview <br />
        still has space (e.g. Languages, Awards, Certifications)
      </span>
      <label htmlFor="form-input__interests" className="form-label">
        Interests
        <input
          type="text"
          name=""
          id="form-input__interests"
          className="form-input form-input__interests"
          placeholder="Design"
        />
      </label>

      <label className="form-label">
        Add a skill category
        <input
          type="text"
          name="otherInfoCategory"
          className="form-input form-input__other-info-category"
          placeholder="Design"
        />
      </label>
      <label className="form-label">
        Add a skill in Design Category
        <input
          type="text"
          name="skill"
          className="form-input form-input__other-info-item"
          placeholder="Photoshop"
        />
      </label>
    </fieldset>
  );
}

export default OtherInfo;

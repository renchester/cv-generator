function OtherInfo() {
  return (
    <fieldset className="form-fieldset form__other-info">
      <label className="form-label">
        Add a category (ex. Languages/Interests/Awards)
        <input
          type="text"
          name="otherInfoCategory"
          className="form-input form-input__other-info-category"
          placeholder="Languages"
        />
      </label>
      <label className="form-label">
        Add items in that category
        <input
          type="text"
          name="skill"
          className="form-input form-input__other-info-item"
          placeholder="English"
        />
      </label>
    </fieldset>
  );
}

export default OtherInfo;

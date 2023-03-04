function BasicInfo() {
  return (
    <fieldset className="form-fieldset form__basic-info">
      <label htmlFor="form-input__first-name" className="form-label">
        First name:
        <input
          type="text"
          name="firstName"
          id="form-input__first-name"
          className="form-input form-input__first-name"
          placeholder="John"
        />
      </label>
      <label htmlFor="form-input__last-name" className="form-label">
        Last name:
        <input
          type="text"
          name="lastName"
          id="form-input__last-name"
          className="form-input form-input__last-name"
          placeholder="Appleseed"
        />
      </label>
      <label htmlFor="form-input__occupation" className="form-label">
        Professional title:
        <input
          type="text"
          name="occupation"
          id="form-input__occupation"
          className="form-input form-input__occupation"
          placeholder="Web developer"
        />
      </label>
      <label htmlFor="form-input__self-description" className="form-label">
        What do you do successfully, quickly
        <textarea
          name="selfDescription"
          id="form-input__self-description"
          cols="30"
          rows="10"
          placeholder="Sample of what you do"
        />
      </label>
    </fieldset>
  );
}

export default BasicInfo;

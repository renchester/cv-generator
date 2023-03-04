function BasicInfo() {
  return (
    <fieldset className="form-fieldset form__basic-info">
      <label className="form-label">
        First name:
        <input
          type="text"
          name="firstName"
          className="form-input form-input__first-name"
          placeholder="John"
        />
      </label>
      <label className="form-label">
        Last name:
        <input
          type="text"
          name="lastName"
          className="form-input form-input__last-name"
          placeholder="Appleseed"
        />
      </label>
      <label className="form-label">
        Professional title:
        <input
          type="text"
          name="occupation"
          className="form-input form-input__occupation"
          placeholder="Web developer"
        />
      </label>
      <label className="form-label">
        What do you do successfully, quickly
        <textarea
          name="selfDescription"
          cols="30"
          rows="10"
          placeholder="Sample of what you do"
        />
      </label>
    </fieldset>
  );
}

export default BasicInfo;

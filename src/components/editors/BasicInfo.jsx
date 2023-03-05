function BasicInfo(props) {
  const { handleChange, handleSubmit, data } = props;

  return (
    <form
      className="form form__container form__basic-info"
      onSubmit={handleSubmit}
    >
      <h1 className="form-title">Basic Info</h1>
      <fieldset className="form-fieldset form__basic-info">
        <label className="form-label">
          First name:
          <input
            type="text"
            name="firstName"
            className="form-input form-input__first-name"
            placeholder="John"
            onChange={handleChange}
            value={data.firstName}
          />
        </label>
        <label className="form-label">
          Last name:
          <input
            type="text"
            name="lastName"
            className="form-input form-input__last-name"
            placeholder="Appleseed"
            onChange={handleChange}
            value={data.lastName}
          />
        </label>
        <label className="form-label">
          Professional title:
          <input
            type="text"
            name="occupation"
            className="form-input form-input__occupation"
            placeholder="Web developer"
            onChange={handleChange}
            value={data.occupation}
          />
        </label>
        <label className="form-label">
          What do you do successfully, quickly
          <textarea
            name="selfDescription"
            cols="30"
            rows="10"
            placeholder="Sample of what you do"
            onChange={handleChange}
            value={data.selfDescription}
          />
        </label>
      </fieldset>
    </form>
  );
}

export default BasicInfo;

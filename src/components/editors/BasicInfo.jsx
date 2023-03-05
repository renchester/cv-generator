function BasicInfo(props) {
  const { data, handleChange } = props;

  return (
    <form className="form form__container form__basic-info">
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
          Give a summary about yourself
          <textarea
            name="selfSummary"
            cols="30"
            rows="10"
            onChange={handleChange}
            value={data.selfSummary}
          />
        </label>
      </fieldset>
    </form>
  );
}

export default BasicInfo;

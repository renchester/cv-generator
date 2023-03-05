function ContactInfo(props) {
  const { data, handleChange } = props;

  return (
    <form className="form form__container form__contact-info">
      <h1 className="form-title">Contact Info</h1>

      <fieldset className="form-fieldset form__contact-info">
        <label className="form-label">
          Email:
          <input
            type="email"
            name="email"
            className="form-input form-input__email"
            placeholder="johnappleseed@site.com"
            onChange={handleChange}
            value={data.email}
          />
        </label>
        <label className="form-label">
          Phone Number:
          <input
            type="number"
            name="phoneNumber"
            className="form-input form-input__phone-number"
            onChange={handleChange}
            value={data.phoneNumber}
          />
        </label>
        <label className="form-label">
          Location:
          <input
            type="text"
            name="location"
            className="form-input form-input__location"
            placeholder="London, UK"
            onChange={handleChange}
            value={data.location}
          />
        </label>
        <label className="form-label">
          Linkedin:
          <input
            type="text"
            name="linkedin"
            className="form-input form-input__linkedin"
            placeholder="linkedin.com/johnappleseed"
            onChange={handleChange}
            value={data.linkedin}
          />
        </label>
      </fieldset>
    </form>
  );
}

export default ContactInfo;

function ContactInfo() {
  return (
    <fieldset className="form-fieldset form__contact-info">
      <label className="form-label">
        Email:
        <input
          type="email"
          name="email"
          className="form-input form-input__email"
          placeholder="johnappleseed@site.com"
        />
      </label>
      <label className="form-label">
        Phone Number:
        <input
          type="number"
          name="phoneNumber"
          className="form-input form-input__phone-number"
        />
      </label>
      <label className="form-label">
        Location:
        <input
          type="text"
          name="location"
          className="form-input form-input__location"
          placeholder="London, UK"
        />
      </label>
      <label className="form-label">
        Linkedin:
        <input
          type="text"
          name="linkedin"
          className="form-input form-input__linkedin"
          placeholder="linkedin.com/johnappleseed"
        />
      </label>
    </fieldset>
  );
}

export default ContactInfo;

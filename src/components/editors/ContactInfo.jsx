function ContactInfo() {
  return (
    <fieldset className="form-fieldset form__contact-info">
      <label htmlFor="form-input__email" className="form-label">
        Email:
        <input
          type="email"
          name="email"
          id="form-input__email"
          className="form-input form-input__email"
          placeholder="johnappleseed@site.com"
        />
      </label>
      <label htmlFor="form-input__phone-number" className="form-label">
        Phone Number:
        <input
          type="number"
          name="phoneNumber"
          id="form-input__phone-number"
          className="form-input form-input__phone-number"
        />
      </label>
      <label htmlFor="form-input__location" className="form-label">
        Location:
        <input
          type="text"
          name="location"
          id="form-input__location"
          className="form-input form-input__location"
          placeholder="London, UK"
        />
      </label>
      <label htmlFor="form-input__linkedin" className="form-label">
        Linkedin:
        <input
          type="text"
          name="linkedin"
          id="form-input__linkedin"
          className="form-input form-input__linkedin"
          placeholder="linkedin.com/johnappleseed"
        />
      </label>
    </fieldset>
  );
}

export default ContactInfo;

function EducationInfo() {
  return (
    <fieldset className="form-fieldset form__education-info">
      <label htmlFor="form-input__education-institution" className="form-label">
        University/Institution/Organization:
        <input
          type="text"
          name="institution"
          id="form-input__education-institution"
          className="form-input form-input__education-institution"
          placeholder="University of London"
        />
      </label>
      <label htmlFor="form-input__starting-year" className="form-label">
        Starting Year:
        <input
          type="month"
          name="startingYear"
          id="form-input__starting-year"
          className="form-input form-input__starting-year"
          min="1900-01"
          placeholder="2010"
        />
      </label>
      <label htmlFor="form-input__graduating-year" className="form-label">
        Graduating Year:
        <input
          type="month"
          name="graduatingYear"
          id="form-input__graduating-year"
          className="form-input form-input__graduating-year"
          min="1900-01"
          placeholder="2014"
        />
      </label>
      <label htmlFor="form-input__gpa" className="form-label">
        GPA:
        <input
          type="text"
          name="gpa"
          id="form-input__gpa"
          className="form-input form-input__gpa"
          placeholder="3.9/4.0"
        />
      </label>
    </fieldset>
  );
}

export default EducationInfo;

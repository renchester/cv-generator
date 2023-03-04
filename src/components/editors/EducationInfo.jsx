function EducationInfo() {
  return (
    <fieldset className="form-fieldset form__education-info">
      <label className="form-label">
        University/Institution/Organization:
        <input
          type="text"
          name="institution"
          className="form-input form-input__education-institution"
          placeholder="University of London"
        />
      </label>
      <label className="form-label">
        Program/Degree/Course:
        <input
          type="text"
          name="degreeProgram"
          className="form-input form-input__degree-program"
          placeholder="B.A. in Psychology/Doctorate in Philosophy"
        />
      </label>
      <label className="form-label">
        Starting Year:
        <input
          type="month"
          name="startingYear"
          className="form-input form-input__starting-year"
          min="1900-01"
          value="2005-10"
          placeholder="2010"
        />
      </label>
      <label className="form-label">
        Graduating Year:
        <input
          type="month"
          name="graduatingYear"
          className="form-input form-input__graduating-year"
          min="1900-01"
          value="2000-10"
          placeholder="2014"
        />
      </label>
      <label className="form-label">
        GPA:
        <input
          type="text"
          name="gpa"
          className="form-input form-input__gpa"
          placeholder="3.9/4.0"
        />
      </label>
    </fieldset>
  );
}

export default EducationInfo;

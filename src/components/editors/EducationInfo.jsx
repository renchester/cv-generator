import { useState } from 'react';
import CompletedBackgroundForm from './CompletedBackgroundForm';

function EducationInfo(props) {
  const { data, handleSubmit, deleteEducInfo } = props;
  const type = 'educationInfo';

  const emptyState = {
    institution: '',
    degreeProgram: '',
    startingYear: '',
    graduatingYear: '',
    ongoing: false,
    gpa: '',
    id: '',
  };

  const [educInfo, setEducInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setEducInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const editEducInfo = (id) => {
    // Show warning
    deleteEducInfo(id, type);

    setEducInfo(data.find((item) => item.id === id));
  };

  const submitEducInfo = (e) => {
    // Submit local state to app state
    handleSubmit(e, type);

    // Set local state to empty
    setEducInfo(emptyState);
  };

  const addedInfoMarkup = data.map((addedInfo) => (
    <CompletedBackgroundForm
      key={addedInfo.id}
      id={addedInfo.id}
      handleDelete={deleteEducInfo}
      handleEdit={editEducInfo}
      mainText={addedInfo.institution}
      subText={addedInfo.degreeProgram}
      type={type}
    />
  ));

  return (
    <section className="form form__container form__education-info">
      <h1 className="form-title">Education Background</h1>
      {data.length ? addedInfoMarkup : ''}
      <fieldset className="form-fieldset form__education-info">
        <label className="form-label">
          University/Institution/Organization:
          <input
            type="text"
            name="institution"
            className="form-input form-input__education-institution"
            placeholder="University of London"
            value={educInfo.institution}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          Program/Degree/Course:
          <input
            type="text"
            name="degreeProgram"
            className="form-input form-input__degree-program"
            placeholder="B.A. in Psychology/Doctorate in Philosophy"
            value={educInfo.degreeProgram}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          Starting Year:
          <input
            type="month"
            name="startingYear"
            className="form-input form-input__starting-year"
            min="1900-01"
            placeholder="2010"
            value={educInfo.startingYear || '2010-10'}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          Graduating Year:
          <input
            type="month"
            name="graduatingYear"
            className="form-input form-input__graduating-year"
            min="1900-01"
            placeholder="2014"
            value={educInfo.graduatingYear || '2014-10'}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          GPA:
          <input
            type="text"
            name="gpa"
            className="form-input form-input__gpa"
            placeholder="3.9/4.0"
            value={educInfo.gpa}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button
        type="submit"
        className="btn btn__submit"
        onClick={submitEducInfo}
      >
        Add another
      </button>
    </section>
  );
}

export default EducationInfo;

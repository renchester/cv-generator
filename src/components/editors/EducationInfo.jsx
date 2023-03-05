import { useState } from 'react';

import { nanoid } from 'nanoid';

import CompletedBackgroundForm from './CompletedBackgroundForm';
import ItemBanner from './ItemBanner';

function EducationInfo(props) {
  const { data, handleSubmit, deleteEducInfo } = props;
  const infoType = 'educationInfo';

  const emptyState = {
    institution: '',
    degreeProgram: '',
    startingYear: '',
    graduatingYear: '',
    onGoing: true,
    gpa: '',
    id: '',
    additionalInfo: [],
    currentInfoItem: '',
  };

  const [educInfo, setEducInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEducInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const editEducInfo = (id) => {
    // Show warning
    deleteEducInfo(id, infoType);

    setEducInfo(data.find((item) => item.id === id));
  };

  const submitEducInfo = (e) => {
    // Submit local state to app state
    handleSubmit(e, infoType);

    // Set local state to empty
    setEducInfo(emptyState);
  };

  const submitAddlInfo = (e) => {
    const infoContent = e.target.previousElementSibling.value;

    setEducInfo((prevInfo) => ({
      ...prevInfo,
      additionalInfo: [
        ...prevInfo.additionalInfo,
        {
          id: nanoid(),
          content: infoContent,
        },
      ],
      currentInfoItem: '',
    }));
  };

  const deleteAddlInfo = (id) => {
    setEducInfo((prevInfo) => ({
      ...prevInfo,
      additionalInfo: prevInfo.additionalInfo.filter((item) => item.id !== id),
    }));
  };

  const submittedInfoMarkup = data.map((addedInfo) => (
    <CompletedBackgroundForm
      key={addedInfo.id}
      id={addedInfo.id}
      handleDelete={deleteEducInfo}
      handleEdit={editEducInfo}
      mainText={addedInfo.institution}
      subText={addedInfo.degreeProgram}
      type={infoType}
    />
  ));

  const addlInfoMarkup = educInfo.additionalInfo.map((item) => (
    <ItemBanner
      key={item.id}
      id={item.id}
      name={item.content}
      deleteItem={deleteAddlInfo}
    />
  ));

  return (
    <section className="form form__container form__education-info">
      <h1 className="form-title">Education Background</h1>
      {data.length ? submittedInfoMarkup : ''}
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
            value={educInfo.startingYear || '2010-10'}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          On-going:
          <input
            type="checkbox"
            name="onGoing"
            className="form-input form-input__ongoing"
            onChange={handleChange}
            checked={educInfo.onGoing}
          />
        </label>
        {!educInfo.onGoing && (
          <label className="form-label">
            Graduating Year:
            <input
              type="month"
              name="graduatingYear"
              className="form-input form-input__graduating-year"
              min="1900-01"
              value={educInfo.graduatingYear || '2014-10'}
              onChange={handleChange}
            />
          </label>
        )}
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

        <label className="form-label">
          Additional info (e.g. awards, courses, thesis project)
          {educInfo.additionalInfo.length ? addlInfoMarkup : ''}
          <textarea
            type="text"
            name="currentInfoItem"
            className="form-input form-input__addl-info-item"
            placeholder="Awards: 1st Place, Competition; 2nd Place, Competition"
            value={educInfo.currentInfoItem}
            onChange={handleChange}
          />
          <button
            type="button"
            className="btn btn__submit"
            onClick={submitAddlInfo}
          >
            Submit additional info
          </button>
        </label>
      </fieldset>
      <button
        type="submit"
        className="btn btn__submit"
        onClick={submitEducInfo}
      >
        Submit education background
      </button>
    </section>
  );
}

export default EducationInfo;

import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import FormBanner from './FormBanner';
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

  const [educInfo, setEducInfo] = useState(
    JSON.parse(localStorage.getItem('cvEducationInfo')) || emptyState,
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setEducInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  useEffect(() => {
    localStorage.setItem('cvEducationInfo', JSON.stringify(educInfo));
  }, [educInfo]);

  const editEducInfo = (id) => {
    // Show warning
    deleteEducInfo(id, infoType);

    setEducInfo(data.find((item) => item.id === id));
  };

  const submitEducInfo = (e) => {
    e.preventDefault();

    // Submit local state to app state
    handleSubmit(e, infoType);

    // Set local state to empty
    setEducInfo(emptyState);
  };

  const submitAddlInfo = (e) => {
    let infoContent;

    if (e.type === 'keydown' && e.key !== 'Enter') return;
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value;
    } else if (e.key === 'Enter') infoContent = e.target.value;

    if (!infoContent) return;

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
    <FormBanner
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
    <form
      className="form form__container form__education-info"
      onSubmit={submitEducInfo}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    >
      <h1 className="form-title">Education Background</h1>
      {data.length ? (
        <div className="form-banner__container">{submittedInfoMarkup}</div>
      ) : (
        ''
      )}
      <fieldset className="form-fieldset form__education-info">
        <label className="form-label">
          <span className="form-label__title">
            University/Institution/Organization:
          </span>
          <input
            type="text"
            name="institution"
            className="form-input form-input__education-institution"
            placeholder="University of London"
            value={educInfo.institution}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Program/Degree/Course:</span>
          <input
            type="text"
            name="degreeProgram"
            className="form-input form-input__degree-program"
            placeholder="Ph.D in Philosophy"
            value={educInfo.degreeProgram}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">Starting Year:</span>
          <input
            type="month"
            name="startingYear"
            className="form-input form-input__starting-year"
            min="1900-01"
            value={educInfo.startingYear || '2010-10'}
            onChange={handleChange}
            required
          />
        </label>
        <div className="form-label">
          <span className="form-label__title">On-going:</span>
          <div className="switch-ongoing">
            <input
              className="form-input switch-ongoing__input"
              type="checkbox"
              name="onGoing"
              id="ongoingSwitchEduc"
              onChange={handleChange}
              checked={educInfo.onGoing}
            />
            <label
              aria-hidden="true"
              className="switch-ongoing__label"
              htmlFor="ongoingSwitchEduc"
            >
              On
            </label>
            <div aria-hidden="true" className="switch-ongoing__marker" />
          </div>
        </div>
        {!educInfo.onGoing && (
          <label className="form-label">
            <span className="form-label__title">Graduating Year:</span>
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
          <span className="form-label__title">GPA (optional):</span>
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
          <span className="form-label__title">
            Additional info (ex. awards, courses, thesis project)
          </span>

          <div className="submitted-item__container">
            {educInfo.additionalInfo.length ? addlInfoMarkup : ''}
          </div>

          <div className="form-input__items-wrapper">
            <input
              type="text"
              name="currentInfoItem"
              className="form-input form-input__addl-info-item form-input__items"
              placeholder="Press enter to submit an item..."
              value={educInfo.currentInfoItem}
              onChange={handleChange}
              onKeyDown={submitAddlInfo}
            />
            <button
              type="button"
              className="btn btn__submit-item material-symbols-outlined"
              onClick={submitAddlInfo}
            >
              add
            </button>
          </div>
        </label>
      </fieldset>
      <button type="submit" className="btn btn__submit">
        Submit education background
      </button>
    </form>
  );
}

export default EducationInfo;

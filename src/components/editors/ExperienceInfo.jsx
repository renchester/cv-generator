import { useState } from 'react';

import CompletedBackgroundForm from './CompletedBackgroundForm';

function ExperienceInfo(props) {
  const { data, deleteExpInfo, handleSubmit } = props;
  const infoType = 'experienceInfo';

  const emptyState = {
    jobTitle: '',
    company: '',
    startingYear: '',
    endingYear: '',
    onGoing: true,
    jobSpecifics: [],
  };

  const [expInfo, setExpInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setExpInfo((prevInfo) => ({
      ...prevInfo,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const editExpInfo = (id) => {
    // Show warning
    deleteExpInfo(id, infoType);

    setExpInfo(data.find((item) => item.id === id));
  };

  const submitExpInfo = (e) => {
    handleSubmit(e, infoType);
    setExpInfo(emptyState);
  };

  const addedInfoMarkup = data.map((addedInfo) => (
    <CompletedBackgroundForm
      key={addedInfo.id}
      id={addedInfo.id}
      handleDelete={deleteExpInfo}
      handleEdit={editExpInfo}
      mainText={addedInfo.company}
      subText={addedInfo.jobTitle}
      type={infoType}
    />
  ));

  return (
    <section className="form form__container form__experience-info">
      <h1 className="form-title">Work Experience</h1>
      {data.length ? addedInfoMarkup : ''}
      <fieldset className="form-fieldset form__experience-info">
        <label className="form-label">
          Title/Position:
          <input
            type="text"
            name="jobTitle"
            className="form-input form-input__job-title"
            placeholder="Junior web developer"
            value={expInfo.jobTitle}
            onChange={handleChange}
          />
        </label>
        <label className="form-label">
          Workplace/Company/Organization:
          <input
            type="text"
            name="company"
            className="form-input form-input__company"
            placeholder="Mozilla Inc."
            value={expInfo.company}
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
            value={expInfo.startingYear || '2010-10'}
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
            checked={expInfo.onGoing}
          />
        </label>
        {!expInfo.onGoing && (
          <label className="form-label">
            End Year:
            <input
              type="month"
              name="endingYear"
              className="form-input form-input__ending-year"
              min="1900-01"
              value={expInfo.endingYear || '2014-10'}
              onChange={handleChange}
            />
          </label>
        )}

        <label className="form-label">
          List your duties and specifics in your job:
          <input
            type="text"
            name="jobSpecifics"
            className="form-input form-input__job-specifics"
            placeholder="Mozilla Inc."
            value={expInfo.jobSpecifics}
            onChange={handleChange}
          />
        </label>
      </fieldset>
      <button type="submit" className="btn btn__submit" onClick={submitExpInfo}>
        Set info
      </button>
    </section>
  );
}

export default ExperienceInfo;

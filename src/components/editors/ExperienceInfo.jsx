import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import FormBanner from './FormBanner';
import ItemBanner from './ItemBanner';

function ExperienceInfo(props) {
  const { data, deleteExpInfo, handleSubmit } = props;
  const infoType = 'experienceInfo';

  const emptyState = {
    jobTitle: '',
    company: '',
    startingYear: '',
    endingYear: '',
    onGoing: true,
    additionalInfo: [],
    currentInfoItem: '',
  };

  const [expInfo, setExpInfo] = useState(
    JSON.parse(localStorage.getItem('cvExperienceInfo')) || emptyState,
  );

  useEffect(() => {
    localStorage.setItem('cvExperienceInfo', JSON.stringify(expInfo));
  }, [expInfo]);

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
    e.preventDefault();

    handleSubmit(e, infoType);
    setExpInfo(emptyState);
  };

  const submitAddlInfo = (e) => {
    let infoContent;

    if (e.type === 'keydown' && e.key !== 'Enter') return;
    if (e.type === 'click') {
      infoContent = e.target.previousElementSibling.value;
    } else if (e.key === 'Enter') infoContent = e.target.value;

    if (!infoContent) return;

    setExpInfo((prevInfo) => ({
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
    setExpInfo((prevInfo) => ({
      ...prevInfo,
      additionalInfo: prevInfo.additionalInfo.filter((item) => item.id !== id),
    }));
  };

  const submittedInfoMarkup = data.map((submittedInfo) => (
    <FormBanner
      key={submittedInfo.id}
      id={submittedInfo.id}
      handleDelete={deleteExpInfo}
      handleEdit={editExpInfo}
      mainText={submittedInfo.company}
      subText={submittedInfo.jobTitle}
      type={infoType}
    />
  ));

  const addlInfoMarkup = expInfo.additionalInfo.map((item) => (
    <ItemBanner
      key={item.id}
      id={item.id}
      name={item.content}
      deleteItem={deleteAddlInfo}
    />
  ));

  return (
    <form
      className="form form__container form__experience-info"
      onSubmit={submitExpInfo}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    >
      <h1 className="form-title">Work Experience</h1>

      {data.length ? (
        <div className="form-banner__container">{submittedInfoMarkup}</div>
      ) : (
        ''
      )}

      <fieldset className="form-fieldset form__experience-info">
        <label className="form-label">
          <span className="form-label__title">Title/Position:</span>
          <input
            type="text"
            name="jobTitle"
            className="form-input form-input__job-title"
            placeholder="Business Analyst"
            value={expInfo.jobTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label className="form-label">
          <span className="form-label__title">
            Workplace/Company/Organization:
          </span>
          <input
            type="text"
            name="company"
            className="form-input form-input__company"
            placeholder="Company Inc."
            value={expInfo.company}
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
            value={expInfo.startingYear || '2010-10'}
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
              id="ongoingSwitchExp"
              onChange={handleChange}
              checked={expInfo.onGoing}
            />
            <label
              aria-hidden="true"
              className="switch-ongoing__label"
              htmlFor="ongoingSwitchExp"
            >
              On
            </label>
            <div aria-hidden="true" className="switch-ongoing__marker" />
          </div>
        </div>

        {!expInfo.onGoing && (
          <label className="form-label">
            <span className="form-label__title">End Year:</span>
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
          <span className="form-label__title">
            List your job responsibilities
          </span>

          <div className="submitted-item__container">
            {expInfo.additionalInfo.length ? addlInfoMarkup : ''}
          </div>

          <div className="form-input__items-wrapper">
            <input
              type="text"
              name="currentInfoItem"
              placeholder="Press enter to submit an item..."
              className="form-input form-input__job-specifics form-input__items"
              value={expInfo.currentInfoItem}
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
        Submit work experience
      </button>
    </form>
  );
}

export default ExperienceInfo;

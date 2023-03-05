import { useState } from 'react';

import { nanoid } from 'nanoid';

import CompletedBackgroundForm from './CompletedBackgroundForm';
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

  const submitAddlInfo = (e) => {
    const infoContent = e.target.previousElementSibling.value;

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
    <CompletedBackgroundForm
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
    <section className="form form__container form__experience-info">
      <h1 className="form-title">Work Experience</h1>
      {data.length ? submittedInfoMarkup : ''}
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
          List your job responsibilities
          {expInfo.additionalInfo.length ? addlInfoMarkup : ''}
          <input
            type="text"
            name="currentInfoItem"
            placeholder="Did this one thing etc."
            className="form-input form-input__job-specifics"
            value={expInfo.currentInfoItem}
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
      <button type="submit" className="btn btn__submit" onClick={submitExpInfo}>
        Submit work experience
      </button>
    </section>
  );
}

export default ExperienceInfo;

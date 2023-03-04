import { useState } from 'react';

import CompletedBackgroundForm from './CompletedBackgroundForm';

function ExperienceInfo(props) {
  const { data, deleteExpInfo, handleSubmit } = props;

  const emptyState = {
    jobTitle: '',
    company: '',
    jobSpecifics: [],
  };

  const [expInfo, setExpInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setExpInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const editExpInfo = (id) => {
    // Show warning
    deleteExpInfo(id);

    setExpInfo(data.find((item) => item.id === id));
  };

  const submitExpInfo = (e) => {
    handleSubmit(e);
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
    />
  ));

  return (
    <form
      className="form form__container form__experience-info"
      onSubmit={submitExpInfo}
    >
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
      <button type="submit" className="btn btn__submit">
        Set info
      </button>
    </form>
  );
}

export default ExperienceInfo;

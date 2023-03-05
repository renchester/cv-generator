import { useState } from 'react';

import { nanoid } from 'nanoid';

import CompletedBackgroundForm from './CompletedBackgroundForm';

function SkillsInfo(props) {
  const { data, handleSubmit, deleteSkillsInfo } = props;

  const emptyState = { category: '', skills: [], currentSkill: '' };

  const [skillsInfo, setSkillsInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setSkillsInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const editSkillsInfo = (id) => {
    // Show warning
    deleteSkillsInfo(id);

    const target = data.find((item) => item.id === id);

    setSkillsInfo(Object.assign(target, { currentSkill: '' }));
  };

  const submitSkillsInfo = (e) => {
    handleSubmit(e);
    setSkillsInfo(emptyState);
  };

  const submitSkill = (e) => {
    if (e.key !== 'Enter') return;

    setSkillsInfo((prevSkillsInfo) => ({
      ...prevSkillsInfo,
      skills: [
        ...prevSkillsInfo.skills,
        {
          id: nanoid(),
          name: e.target.value,
        },
      ],
      currentSkill: '',
    }));
  };

  const deleteSkill = (id) => {
    setSkillsInfo((prevSkillsInfo) => ({
      ...prevSkillsInfo,
      skills: prevSkillsInfo.skills.filter((item) => item.id !== id),
    }));
  };

  const skillsEl = skillsInfo.skills.map((item) => (
    <div key={item.id} className="submitted-item__wrapper">
      <span className="submitted-item__name" data-id={item.id}>
        {item.name}
      </span>
      <button
        className="submitted-item__delete"
        type="button"
        onMouseDown={() => deleteSkill(item.id)}
      >
        X
      </button>
    </div>
  ));

  const submittedSkillsInfoMarkup = data.map((submittedInfo) => (
    <CompletedBackgroundForm
      key={submittedInfo.id}
      id={submittedInfo.id}
      handleDelete={deleteSkillsInfo}
      handleEdit={editSkillsInfo}
      mainText={submittedInfo.category}
      subText={submittedInfo.skills[0].name}
    />
  ));

  return (
    <section className="form form__container form__skills-info">
      <h1 className="form-title">Technical Skills</h1>
      {data.length ? submittedSkillsInfoMarkup : ''}
      <fieldset className="form-fieldset form__skills-info">
        <label className="form-label">
          Add a skill category
          <input
            type="text"
            name="category"
            className="form-input form-input__skill-category"
            placeholder="Design"
            value={skillsInfo.category}
            onChange={handleChange}
          />
        </label>

        {skillsInfo.category && (
          <label className="form-label">
            Add a skill in {skillsInfo.category}
            <div className="form-input__submitted-items form-input__submitted-skills">
              {skillsInfo.skills.length ? skillsEl : ''}
              <input
                type="text"
                name="currentSkill"
                className="form-input form-input__skill form-input__cumulative"
                placeholder="Photoshop"
                onKeyDown={submitSkill}
                onChange={handleChange}
                value={skillsInfo.currentSkill}
              />
            </div>
          </label>
        )}
      </fieldset>
      <button
        type="submit"
        className="btn btn__submit"
        onClick={submitSkillsInfo}
      >
        Add another category
      </button>
    </section>
  );
}

export default SkillsInfo;

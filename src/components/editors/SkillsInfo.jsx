import { useState } from 'react';

import { nanoid } from 'nanoid';

import CompletedBackgroundForm from './CompletedBackgroundForm';
import ItemBanner from './ItemBanner';

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

  const submitSkillKey = (e) => {
    if (e.key !== 'Enter') return;

    setSkillsInfo((prevInfo) => ({
      ...prevInfo,
      skills: [
        ...prevInfo.skills,
        {
          id: nanoid(),
          content: e.target.value,
        },
      ],
      currentSkill: '',
    }));
  };

  const submitSkillClick = (e) => {
    const skillContent = e.target.previousElementSibling.value;

    setSkillsInfo((prevInfo) => ({
      ...prevInfo,
      skills: [
        ...prevInfo.skills,
        {
          id: nanoid(),
          content: skillContent,
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

  const skillBanners = skillsInfo.skills.map((item) => (
    <ItemBanner
      key={item.id}
      id={item.id}
      name={item.content}
      deleteItem={deleteSkill}
    />
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
              {skillsInfo.skills.length ? skillBanners : ''}
              <input
                type="text"
                name="currentSkill"
                className="form-input form-input__skill form-input__cumulative"
                placeholder="Photoshop"
                onKeyDown={submitSkillKey}
                onChange={handleChange}
                value={skillsInfo.currentSkill}
              />
              <button
                type="button"
                className="btn btn__submit"
                onClick={submitSkillClick}
              >
                +
              </button>
            </div>
          </label>
        )}
      </fieldset>
      <button
        type="submit"
        className="btn btn__submit"
        onClick={submitSkillsInfo}
      >
        Submit Category
      </button>
    </section>
  );
}

export default SkillsInfo;

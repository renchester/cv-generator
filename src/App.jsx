import { useState } from 'react';

import { nanoid } from 'nanoid';

import Editor from './components/editors/Editor';
import Preview from './components/preview/Preview';

function App() {
  const [formData, setFormData] = useState({
    basicInfo: {
      firstName: '',
      lastName: '',
      age: '',
      occupation: '',
      selfSummary: '',
    },
    contactInfo: {
      email: '',
      phoneNumber: '',
      location: '',
      linkedin: '',
    },
    educationInfo: [],
    experienceInfo: [],
    skillsInfo: [],
    otherInfo: [{ category: '', item: [] }],
  });

  const handleBasicInfoChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      basicInfo: {
        ...prevFormData.basicInfo,
        [name]: value,
      },
    }));
  };

  const handleContactInfoChanges = (e) => {
    const { name, value } = e.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      contactInfo: {
        ...prevFormData.contactInfo,
        [name]: value,
      },
    }));
  };

  const submitBackgroundInfo = (e, type) => {
    const parentEl = e.target.closest('section');
    const newInfo = [...parentEl.querySelectorAll('input')]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: [
        ...prevFormData[type],
        {
          id: nanoid(),
          ...newInfo,
        },
      ],
    }));
  };

  const deleteBackgroundInfo = (id, type) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: prevFormData[type].filter((item) => item.id !== id),
    }));
  };

  const submitSkillsInfo = (e) => {
    const parentEl = e.target.closest('section');

    const skillCategory = parentEl.querySelector(
      '.form-input__skill-category',
    ).value;
    const skillsSubmitted = [
      ...parentEl.querySelectorAll('.submitted-item__name'),
    ].map((el) => ({ name: el.textContent, id: el.dataset.id }));

    if (!skillCategory) return;

    setFormData((prevFormData) => ({
      ...prevFormData,
      skillsInfo: [
        ...prevFormData.skillsInfo,
        {
          category: skillCategory,
          skills: skillsSubmitted,
          id: nanoid(),
        },
      ],
    }));
  };

  const deleteSkillsInfo = (id) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      skillsInfo: prevFormData.skillsInfo.filter((item) => item.id !== id),
    }));
  };

  return (
    <div className="App">
      <Editor
        formData={formData}
        handleBasicInfoChanges={handleBasicInfoChanges}
        handleContactInfoChanges={handleContactInfoChanges}
        submitBackgroundInfo={submitBackgroundInfo}
        deleteBackgroundInfo={deleteBackgroundInfo}
        submitSkillsInfo={submitSkillsInfo}
        deleteSkillsInfo={deleteSkillsInfo}
      />
      <Preview formData={formData} />
    </div>
  );
}

export default App;

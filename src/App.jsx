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
      selfDescription: '',
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

  const handleEducationInfoSubmit = (e) => {
    e.preventDefault();

    const newEducInfo = [...e.target.querySelectorAll('input')]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      educationInfo: [
        ...prevFormData.educationInfo,
        {
          id: nanoid(),
          ...newEducInfo,
        },
      ],
    }));

    // Reset form
    e.target.closest('form').reset();
  };

  const deleteEducInfo = (id) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      educationInfo: prevFormData.educationInfo.filter(
        (item) => item.id !== id,
      ),
    }));
  };

  const handleExperienceInfoSubmit = (e) => {
    e.preventDefault();

    const newEducInfo = [...e.target.querySelectorAll('input')]
      .map((field) => ({
        [field.name]: field.value,
      }))
      .reduce((obj, item) => Object.assign(obj, { ...item }));

    setFormData((prevFormData) => ({
      ...prevFormData,
      experienceInfo: [
        ...prevFormData.experienceInfo,
        {
          id: nanoid(),
          ...newEducInfo,
        },
      ],
    }));

    // Reset form
    e.target.closest('form').reset();
  };

  const deleteExpInfo = (id) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      experienceInfo: prevFormData.experienceInfo.filter(
        (item) => item.id !== id,
      ),
    }));
  };

  const submitSkills = (e) => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="App">
      <Editor
        formData={formData}
        handleSubmit={handleSubmit}
        handleBasicInfoChanges={handleBasicInfoChanges}
        handleContactInfoChanges={handleContactInfoChanges}
        handleEducationInfoSubmit={handleEducationInfoSubmit}
        deleteEducInfo={deleteEducInfo}
        handleExperienceInfoSubmit={handleExperienceInfoSubmit}
        deleteExpInfo={deleteExpInfo}
        submitSkills={submitSkills}
        deleteSkillsInfo={deleteSkillsInfo}
      />
      <Preview formData={formData} />
    </div>
  );
}

export default App;

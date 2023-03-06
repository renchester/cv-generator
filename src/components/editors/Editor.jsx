import { useEffect, useState } from 'react';

import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import CategoryInfo from './CategoryInfo';

function Editor(props) {
  const {
    formData,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    submitBackgroundInfo,
    deleteBackgroundInfo,
    submitCategoryInfo,
    deleteCategoryInfo,
  } = props;

  const [isDarkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem('isDarkMode')) || false,
  );

  useEffect(() => {
    localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode));

    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkMode]);

  const handleTheme = () => {
    setDarkMode((prevMode) => !prevMode);
  };

  return (
    <div className="editor">
      <header className="header">
        <h1 className="header-title">cv generator</h1>
        <p className="header-description">
          Create your CV by filling out the forms below! Your CV will be
          dynamically updated in the preview.
        </p>
        <a
          className="header-github"
          href="https://github.com/renchester/cv-generator"
          rel="noopener noreferrer"
        >
          Check out the Github repo for this project here
        </a>

        <div className="switch">
          <input
            className="switch__input"
            type="checkbox"
            id="themeSwitch"
            onChange={handleTheme}
            checked={isDarkMode}
          />
          <label
            aria-hidden="true"
            className="switch__label"
            htmlFor="themeSwitch"
          >
            On
          </label>
          <div aria-hidden="true" className="switch__marker" />
        </div>
      </header>

      <BasicInfo
        data={formData.basicInfo}
        handleChange={handleBasicInfoChanges}
      />

      <ContactInfo
        data={formData.contactInfo}
        handleChange={handleContactInfoChanges}
      />

      <EducationInfo
        data={formData.educationInfo}
        handleSubmit={submitBackgroundInfo}
        deleteEducInfo={deleteBackgroundInfo}
      />

      <ExperienceInfo
        data={formData.experienceInfo}
        handleSubmit={submitBackgroundInfo}
        deleteExpInfo={deleteBackgroundInfo}
      />

      <CategoryInfo
        data={formData.skillsInfo}
        handleSubmit={submitCategoryInfo}
        handleDelete={deleteCategoryInfo}
        infoType="skillsInfo"
      />

      <CategoryInfo
        data={formData.otherInfo}
        handleSubmit={submitCategoryInfo}
        handleDelete={deleteCategoryInfo}
        infoType="otherInfo"
      />
    </div>
  );
}

export default Editor;

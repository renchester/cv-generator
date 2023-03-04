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
    experienceInfo: [
      {
        jobTitle: '',
        company: '',
        jobSpecifics: [],
      },
    ],
    skillsInfo: [{ category: '', skills: [] }],
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
      />
      <Preview formData={formData} />
    </div>
  );
}

export default App;

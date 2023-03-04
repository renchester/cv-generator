import { useState } from 'react';

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
    educationInfo: [
      {
        institution: '',
        startingYear: '',
        graduatingYear: '',
        gpa: '',
      },
    ],
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

  // const handleEducationInfoChanges = (e) => {};

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
      />
      <Preview formData={formData} />
    </div>
  );
}

export default App;

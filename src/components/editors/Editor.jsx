import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import SkillsInfo from './SkillsInfo';
import OtherInfo from './OtherInfo';

function Editor(props) {
  const {
    formData,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    submitBackgroundInfo,
    deleteBackgroundInfo,
    submitCategory,
    deleteCategory,
  } = props;

  return (
    <div className="editor">
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

      <SkillsInfo
        data={formData.skillsInfo}
        handleSubmit={submitCategory}
        deleteSkillsInfo={deleteCategory}
      />

      <OtherInfo
        data={formData.otherInfo}
        handleSubmit={submitCategory}
        deleteCategory={deleteCategory}
      />
    </div>
  );
}

export default Editor;

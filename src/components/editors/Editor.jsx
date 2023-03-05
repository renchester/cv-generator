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
    submitSkillsInfo,
    deleteSkillsInfo,
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
        handleSubmit={submitSkillsInfo}
        deleteSkillsInfo={deleteSkillsInfo}
      />

      <form className="form form__container form__other-info">
        <h1 className="form-title">Other Info</h1>
        <span>
          Only fill this out if you deem it important or if your CV preview
          still has space (e.g. Languages, Awards, Certifications)
        </span>

        <OtherInfo data={formData.otherInfo} />
        <button type="submit" className="btn btn__submit">
          Set info
        </button>
      </form>
    </div>
  );
}

export default Editor;

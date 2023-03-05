import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import SkillsInfo from './SkillsInfo';
import OtherInfo from './OtherInfo';

function Editor(props) {
  const {
    formData,
    handleSubmit,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    handleEducationInfoSubmit,
    deleteEducInfo,
    handleExperienceInfoSubmit,
    deleteExpInfo,
    submitSkills,
    deleteSkillsInfo,
  } = props;

  return (
    <div className="editor">
      {/*
        BASIC INFO FORM 
       */}

      <BasicInfo
        data={formData.basicInfo}
        handleChange={handleBasicInfoChanges}
        handleSubmit={handleSubmit}
      />

      {/*
        CONTACT INFO FORM 
      */}

      <ContactInfo
        data={formData.contactInfo}
        handleChange={handleContactInfoChanges}
        handleSubmit={handleSubmit}
      />

      {/*
        EDUCATION INFO FORM 
      */}

      <EducationInfo
        data={formData.educationInfo}
        handleSubmit={handleEducationInfoSubmit}
        deleteEducInfo={deleteEducInfo}
      />

      {/*
        EXPERIENCE INFO FORM 
      */}

      <ExperienceInfo
        data={formData.experienceInfo}
        handleSubmit={handleExperienceInfoSubmit}
        deleteExpInfo={deleteExpInfo}
      />

      {/*
        SKILLS INFO FORM 
      */}

      <SkillsInfo
        data={formData.skillsInfo}
        handleSubmit={submitSkills}
        deleteSkillsInfo={deleteSkillsInfo}
      />

      {/*
        OTHER INFO FORM 
      */}
      <form
        className="form form__container form__other-info"
        onSubmit={handleSubmit}
      >
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

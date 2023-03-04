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
    handleEducationInfoChanges,
    handleEducationInfoSubmit,
    deleteEducInfo,
  } = props;

  return (
    <div className="editor">
      {/*
        BASIC INFO FORM 
       */}
      <form
        className="form form__container form__basic-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Basic Info</h1>
        <BasicInfo
          data={formData.basicInfo}
          handleChange={handleBasicInfoChanges}
        />
      </form>
      {/*
        CONTACT INFO FORM 
      */}
      <form
        className="form form__container form__contact-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Contact Info</h1>
        <ContactInfo
          data={formData.contactInfo}
          handleChange={handleContactInfoChanges}
        />
      </form>
      {/*
        EDUCATION INFO FORM 
      */}

      <EducationInfo
        data={formData.educationInfo}
        handleChange={handleEducationInfoChanges}
        handleSubmit={handleEducationInfoSubmit}
        deleteEducInfo={deleteEducInfo}
      />

      {/*
        EXPERIENCE INFO FORM 
      */}
      <form
        className="form form__container form__experience-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Work Experience</h1>
        <ExperienceInfo data={formData.experienceInfo} />
        <button type="submit" className="btn btn__submit">
          Set info
        </button>
      </form>
      {/*
        SKILLS INFO FORM 
      */}
      <form
        className="form form__container form__skills-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Technical Skills</h1>
        <SkillsInfo data={formData.skillsInfo} />
        <button type="submit" className="btn btn__submit">
          Set info
        </button>
      </form>
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

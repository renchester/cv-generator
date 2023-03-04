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
  } = props;

  return (
    <div className="editor">
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
      <form
        className="form form__container form__contact-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Contact Info</h1>
        <ContactInfo
          data={formData.contactInfo}
          handleChange={handleContactInfoChanges}
        />
        <button type="submit" className="btn btn__submit">
          Set info
        </button>
      </form>
      <form
        className="form form__container form__education-info"
        onSubmit={handleSubmit}
      >
        <h1 className="form-title">Education Background</h1>
        <EducationInfo data={formData.educationInfo} />
        <button type="submit" className="btn btn__submit">
          Set info
        </button>
      </form>
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
      {formData.otherInfo[0].category && (
        <form
          className="form form__container form__other-info"
          onSubmit={handleSubmit}
        >
          <h1 className="form-title">Other Info</h1>
          <OtherInfo data={formData.otherInfo} />
          <button type="submit" className="btn btn__submit">
            Set info
          </button>
        </form>
      )}
    </div>
  );
}

export default Editor;

import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import SkillsInfo from './SkillsInfo';
import OtherInfo from './OtherInfo';

function Editor() {
  return (
    <div className="editor">
      <form className="form form__container form__basic-info">
        <h1 className="form-title">Basic Info</h1>
        <BasicInfo />
      </form>
      <form className="form form__container form__contact-info">
        <h1 className="form-title">Contact Info</h1>
        <ContactInfo />
      </form>
      <form className="form form__container form__education-info">
        <h1 className="form-title">Education Background</h1>
        <EducationInfo />
      </form>
      <form className="form form__container form__experience-info">
        <h1 className="form-title">Work Experience</h1>
        <ExperienceInfo />
      </form>
      <form className="form form__container form__skills-info">
        <h1 className="form-title">Technical Skills</h1>
        <SkillsInfo />
      </form>
      <form className="form form__container form__other-info">
        <h1 className="form-title">Other Info</h1>
        <OtherInfo />
      </form>
    </div>
  );
}

export default Editor;

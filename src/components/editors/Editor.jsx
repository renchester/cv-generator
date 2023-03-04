import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import SkillsInfo from './SkillsInfo';
import OtherInfo from './OtherInfo';

function Editor() {
  return (
    <form method="" action="" className="form form__container">
      <BasicInfo />
      <ContactInfo />
      <EducationInfo />
      <ExperienceInfo />
      <SkillsInfo />
      <OtherInfo />
      <button type="submit" className="form__btn-submit btn">
        Print CV
      </button>
    </form>
  );
}

export default Editor;

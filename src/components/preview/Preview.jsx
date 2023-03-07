import BasicInfoView from './BasicInfoView';
import ContactInfoView from './ContactInfoView';
import EducationInfoView from './EducationInfoView';
import ExperienceInfoView from './ExperienceInfoView';
import SkillsInfoView from './SkillsInfoView';
import OtherInfoView from './OtherInfoView';

function Preview(props) {
  const { formData } = props;

  return (
    <div className="preview__container">
      <main className="preview__printable">
        <section className="preview__main-col">
          <BasicInfoView data={formData.basicInfo} />
          <EducationInfoView data={formData.educationInfo} />
          <ExperienceInfoView data={formData.experienceInfo} />
        </section>

        <section className="preview__sidebar">
          <ContactInfoView data={formData.contactInfo} />
          <SkillsInfoView data={formData.skillsInfo} />
          <OtherInfoView data={formData.otherInfo} />
        </section>
      </main>
    </div>
  );
}

export default Preview;

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
      <BasicInfoView data={formData.basicInfo} />
      <ContactInfoView data={formData.contactInfo} />
      <EducationInfoView data={formData.educationInfo} />
      <ExperienceInfoView data={formData.experienceInfo} />
      <SkillsInfoView data={formData.skillsInfo} />
      <OtherInfoView data={formData.otherInfo} />
    </div>
  );
}

export default Preview;

import BasicInfoView from './BasicInfoView';
import ContactInfoView from './ContactInfoView';
import EducationInfoView from './EducationInfoView';

function Preview(props) {
  const { formData } = props;

  const educationInfoMarkup = formData.educationInfo.map((infoData) => (
    <EducationInfoView key={infoData.id} data={infoData} />
  ));

  return (
    <div className="preview__container">
      <BasicInfoView data={formData.basicInfo} />
      <ContactInfoView data={formData.contactInfo} />
      {formData.educationInfo && educationInfoMarkup}
    </div>
  );
}

export default Preview;

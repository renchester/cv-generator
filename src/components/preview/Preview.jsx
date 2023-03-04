import BasicInfoView from './BasicInfoView';
import ContactInfoView from './ContactInfoView';

function Preview(props) {
  const { formData } = props;

  return (
    <div className="preview__container">
      <BasicInfoView data={formData.basicInfo} />
      <ContactInfoView data={formData.contactInfo} />
    </div>
  );
}

export default Preview;

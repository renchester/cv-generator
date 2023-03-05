import BasicInfo from './BasicInfo';
import ContactInfo from './ContactInfo';
import EducationInfo from './EducationInfo';
import ExperienceInfo from './ExperienceInfo';
import CategoryInfo from './CategoryInfo';

function Editor(props) {
  const {
    formData,
    handleBasicInfoChanges,
    handleContactInfoChanges,
    submitBackgroundInfo,
    deleteBackgroundInfo,
    submitCategoryInfo,
    deleteCategoryInfo,
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

      <CategoryInfo
        data={formData.skillsInfo}
        handleSubmit={submitCategoryInfo}
        handleDelete={deleteCategoryInfo}
        infoType="skillsInfo"
      />

      <CategoryInfo
        data={formData.otherInfo}
        handleSubmit={submitCategoryInfo}
        handleDelete={deleteCategoryInfo}
        infoType="otherInfo"
      />
    </div>
  );
}

export default Editor;

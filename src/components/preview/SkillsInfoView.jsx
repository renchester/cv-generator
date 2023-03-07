function SkillsInfoView(props) {
  const { data } = props;

  const skillsInfoMarkup = data.map((category) => (
    <div key={category.id} className="preview__skill-container">
      <h2 className="preview__skill-category">{category.category}</h2>

      {category.items.map((item) => (
        <div key={item.id} className="preview__skill-item">
          {item.content}
        </div>
      ))}
    </div>
  ));

  return (
    <section className="preview-area preview-area__skills-info">
      <h1 className="preview-title">Technical Skills</h1>
      {data.length ? (
        skillsInfoMarkup
      ) : (
        <>
          <div className="preview__skill-container">
            <h2 className="preview__skill-category">Design</h2>

            <div className="preview__skill-item">Photoshop</div>
            <div className="preview__skill-item">Illustrator</div>
            <div className="preview__skill-item">Figma</div>
          </div>
          <div className="preview__skill-container">
            <h2 className="preview__skill-category">Management</h2>

            <div className="preview__skill-item">Time-management</div>
            <div className="preview__skill-item">Communication</div>
            <div className="preview__skill-item">Pressure</div>
          </div>
        </>
      )}
    </section>
  );
}

export default SkillsInfoView;

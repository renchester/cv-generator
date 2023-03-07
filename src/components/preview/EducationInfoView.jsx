function EducationInfoView(props) {
  const { data } = props;

  const educInfoPreviewMarkup = data.map((item) => (
    <div className="preview-unit__educ-info" key={item.id}>
      <div className="preview__info-main-header">
        <div className="preview__info-main-wrapper">
          <h2 className="preview__institution">{item.institution}</h2>
          <h2 className="preview__degree-program">{item.degreeProgram}</h2>
        </div>
        <span className="preview__active-years">
          {item.startingYear}-{item.onGoing ? 'present' : item.graduatingYear}
        </span>
      </div>
      {item.gpa && <p className="preview__gpa">GPA: {item.gpa}</p>}
      {item.additionalInfo.length ? (
        <ul>
          {item.additionalInfo.map((info) => (
            <li className="preview__educ-additional-info" key={info.id}>
              {info.content}
            </li>
          ))}
        </ul>
      ) : (
        ''
      )}
    </div>
  ));

  return (
    <section className="preview-area preview-area__educ-info">
      <h1 className="preview-title">Education Background</h1>
      {educInfoPreviewMarkup}
    </section>
  );
}

export default EducationInfoView;

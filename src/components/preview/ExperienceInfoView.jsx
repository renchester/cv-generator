function ExperienceInfoView(props) {
  const { data } = props;

  const expInfoPreviewMarkup = data.map((item) => (
    <div className="preview-unit__exp-info" key={item.id}>
      <h2 className="preview__job-title">{item.jobTitle}</h2>
      <h2 className="preview__company">{item.company}</h2>
      <span className="preview__active-years">
        {item.startingYear}-{item.onGoing ? 'present' : item.endingYear}
      </span>
      {item.additionalInfo.length ? (
        <ul>
          {item.additionalInfo.map((info) => (
            <li className="preview__job-responsibility" key={info.id}>
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
    <section className="preview-area preview-area__exp-info">
      <h1 className="preview-title">Work Experience</h1>
      {expInfoPreviewMarkup}
    </section>
  );
}

export default ExperienceInfoView;

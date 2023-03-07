import format from 'date-fns/format';

function ExperienceInfoView(props) {
  const { data } = props;

  const formatDate = (str) => format(new Date(str), 'MMM yyyy');

  const expInfoPreviewMarkup = data.map((item) => (
    <div className="preview-unit__exp-info" key={item.id}>
      <div className="preview__info-main-header">
        <div className="preview__info-main-wrapper">
          <h2 className="preview__job-title">{item.jobTitle}</h2>
          <h2 className="preview__company">{item.company}</h2>
        </div>
        <span className="preview__active-years">
          {formatDate(item.startingYear)}-
          {!item.endingYear ? 'present' : formatDate(item.endingYear)}
        </span>
      </div>
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
      {data.length ? (
        expInfoPreviewMarkup
      ) : (
        <div className="preview-unit__exp-info">
          <div className="preview__info-main-header">
            <div className="preview__info-main-wrapper">
              <h2 className="preview__job-title">Business Analyst</h2>
              <h2 className="preview__company">Company Inc.</h2>
            </div>
            <span className="preview__active-years">Nov 2015-Jan 2020</span>
          </div>

          <ul>
            <li className="preview__job-responsibility">
              Job responsibility 1
            </li>
            <li className="preview__job-responsibility">
              Job responsibility 2
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default ExperienceInfoView;

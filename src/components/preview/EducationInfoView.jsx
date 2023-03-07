import format from 'date-fns/format';

function EducationInfoView(props) {
  const { data } = props;

  const formatDate = (str) => format(new Date(str), 'MMM yyyy');

  const educInfoPreviewMarkup = data.map((item) => (
    <div className="preview-unit__educ-info" key={item.id}>
      <div className="preview__info-main-header">
        <div className="preview__info-main-wrapper">
          <h2 className="preview__institution">{item.institution}</h2>
          <h2 className="preview__degree-program">{item.degreeProgram}</h2>
        </div>
        <span className="preview__active-years">
          {formatDate(item.startingYear)}-
          {!item.graduatingYear ? 'present' : formatDate(item.graduatingYear)}
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
      {data.length ? (
        educInfoPreviewMarkup
      ) : (
        <div className="preview-unit__educ-info">
          <div className="preview__info-main-header">
            <div className="preview__info-main-wrapper">
              <h2 className="preview__institution">University of London</h2>
              <h2 className="preview__degree-program">Ph.D in Philosophy</h2>
            </div>
            <span className="preview__active-years">Oct 2010-Jan 2015</span>
          </div>

          <ul>
            <li className="preview__educ-additional-info">
              Awards: 1st Place, Competition; 2nd Place, Competition
            </li>
            <li className="preview__educ-additional-info">
              Organizations: Organization 1, Organization 2
            </li>
          </ul>
        </div>
      )}
    </section>
  );
}

export default EducationInfoView;

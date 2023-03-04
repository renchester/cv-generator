function EducationInfoView(props) {
  const { data } = props;

  return (
    <div className="preview__area preview__basic-info">
      <h1 className="preview__institution">{data.institution}</h1>
      <h1 className="preview__degree-program">{data.degreeProgram}</h1>
      <h2 className="preview__active-years">
        {data.startingYear}-{data.graduatingYear}
      </h2>
      <p className="preview__gpa">GPA: {data.gpa}</p>
    </div>
  );
}

export default EducationInfoView;

function BasicInfoView(props) {
  const { data } = props;

  return (
    <div className="preview__area preview__basic-info">
      <h1 className="preview__name">
        {data.firstName || 'John'} {data.lastName || 'Doe'}
      </h1>
      <h2 className="preview__job-title">
        {data.occupation || 'Business Manager'}
      </h2>
      <p className="preview__self-description">{data.selfDescription}</p>
    </div>
  );
}

export default BasicInfoView;

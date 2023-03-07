function BasicInfoView(props) {
  const { data } = props;

  return (
    <section className="preview-area preview-area__basic-info">
      <h1 className="preview__name">
        {data.firstName || 'John'} {data.lastName || 'Doe'}
      </h1>
      <h2 className="preview__job-title">
        {data.occupation || 'Business Manager'}
      </h2>
      <p className="preview__self-summary">
        {data.selfSummary ||
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium corporis eligendi quos natus consectetur sint eum nobis dolore neque error reiciendis explicabo ex minima quae fugit, corrupti, temporibus soluta blanditiis.'}
      </p>
    </section>
  );
}

export default BasicInfoView;

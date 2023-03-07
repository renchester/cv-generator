function OtherInfoView(props) {
  const { data } = props;

  const otherInfoMarkup = data.map((info) => (
    <section key={info.id} className="preview-area preview-area__other-info">
      <h1 className="preview-title">{info.category}</h1>
      {info.items.map((item) => (
        <div key={item.id} className="preview__category-item">
          {item.content}
        </div>
      ))}
    </section>
  ));

  return otherInfoMarkup;
}

export default OtherInfoView;

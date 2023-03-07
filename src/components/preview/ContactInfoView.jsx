function ContactInfoView(props) {
  const { data } = props;

  return (
    <section className="preview__area preview-area__contact-info">
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-mail">
          mail
        </span>
        <span className="preview__email">{data.email}</span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-phone">
          smartphone
        </span>
        <span className="preview__phone-number">{data.phoneNumber}</span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-location">
          location_on
        </span>
        <span className="preview__location">{data.location}</span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-link">
          link
        </span>
        <span className="preview__website">{data.website}</span>
      </div>
    </section>
  );
}

export default ContactInfoView;

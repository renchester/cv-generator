function ContactInfoView(props) {
  const { data } = props;

  return (
    <section className="preview__area preview-area__contact-info">
      <div className="preview__contact-wrapper">
        <img src="" alt="" className="preview__contact-icon icon-mail" />
        <span className="preview__email">{data.email}</span>
      </div>
      <div className="preview__contact-wrapper">
        <img src="" alt="" className="preview__contact-icon icon-phone" />
        <span className="preview__phone-number">{data.phoneNumber}</span>
      </div>
      <div className="preview__contact-wrapper">
        <img src="" alt="" className="preview__contact-icon icon-location" />
        <span className="preview__location">{data.location}</span>
      </div>
      <div className="preview__contact-wrapper">
        <img src="" alt="" className="preview__contact-icon icon-linkedin" />
        <span className="preview__linkedin">{data.linkedin}</span>
      </div>
    </section>
  );
}

export default ContactInfoView;

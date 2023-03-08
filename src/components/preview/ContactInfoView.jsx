function ContactInfoView(props) {
  const { data } = props;

  return (
    <section className="preview__area preview-area__contact-info">
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-mail">
          mail
        </span>
        <span className="preview__email preview__contact-content">
          {data.email || 'johndoe@site.com'}
        </span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-phone">
          smartphone
        </span>
        <span className="preview__phone-number preview__contact-content">
          {data.phoneNumber || '+111 222 3333'}
        </span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-location">
          location_on
        </span>
        <span className="preview__location preview__contact-content">
          {data.location || 'London, UK'}
        </span>
      </div>
      <div className="preview__contact-wrapper">
        <span className="material-symbols-outlined preview__contact-icon icon-link">
          link
        </span>
        <span className="preview__website preview__contact-content">
          {data.website || 'linkedin.sample.com/johndoe'}
        </span>
      </div>
    </section>
  );
}

export default ContactInfoView;

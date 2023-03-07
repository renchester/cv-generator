function FormBanner(props) {
  const { type, handleDelete, handleEdit, mainText, subText, id } = props;

  return (
    <div className="form-banner__completed form-banner__editable">
      <p className="form-banner__list-item-text">
        <span className="list-item__main-text">{mainText} </span>
        <span className="list-item-sub-text">/ {subText} </span>
      </p>

      <div className="form-banner__btn-container">
        <button
          type="button"
          className="btn btn__edit-item"
          onClick={() => handleEdit(id)}
        >
          <span className="btn-icon material-symbols-outlined">edit</span>
        </button>
        <button
          type="button"
          className="btn btn__delete-item"
          onClick={() => handleDelete(id, type)}
        >
          <span className="btn-icon material-symbols-outlined">delete</span>
        </button>
      </div>
    </div>
  );
}

export default FormBanner;

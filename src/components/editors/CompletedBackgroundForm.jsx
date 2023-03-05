function CompletedBackgroundForm(props) {
  const { type, handleDelete, handleEdit, mainText, subText, id } = props;

  return (
    <div className="form__completed-bg form__completed-editable">
      <p className="form__list-item-text">
        <span className="list-item__main-text">{mainText} /</span>
        <span className="list-item-sub-text">{subText}</span>
      </p>

      <button
        type="button"
        className="btn btn__edit-item"
        onClick={() => handleEdit(id)}
      >
        Edit
      </button>

      <button
        type="button"
        className="btn btn__delete-item"
        onClick={() => handleDelete(id, type)}
      >
        Delete
      </button>
    </div>
  );
}

export default CompletedBackgroundForm;

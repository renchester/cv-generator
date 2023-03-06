function ItemBanner(props) {
  const { id, name, deleteItem } = props;

  return (
    <div key={id} className="submitted-item__wrapper">
      <span className="submitted-item__name" data-id={id}>
        {name}
      </span>
      <button
        className="submitted-item__delete btn-icon material-symbols-outlined"
        type="button"
        onMouseDown={() => deleteItem(id)}
      >
        close
      </button>
    </div>
  );
}

export default ItemBanner;

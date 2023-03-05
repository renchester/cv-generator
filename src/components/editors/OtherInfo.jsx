import { useState } from 'react';
import { nanoid } from 'nanoid';

import CompletedBackgroundForm from './CompletedBackgroundForm';
import ItemBanner from './ItemBanner';

function OtherInfo(props) {
  const { data, handleSubmit, deleteCategory } = props;

  const emptyState = { category: '', items: [], currentItem: '' };

  const [categoryInfo, setCategoryInfo] = useState(emptyState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const editCategoryInfo = (id) => {
    // Show warning
    deleteCategory(id);

    const target = data.find((item) => item.id === id);

    setCategoryInfo(Object.assign(target, { currentItem: '' }));
  };

  const submitCategoryInfo = (e) => {
    handleSubmit(e);
    setCategoryInfo(emptyState);
  };

  const submitItemKey = (e) => {
    if (e.key !== 'Enter') return;

    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      items: [
        ...prevInfo.items,
        {
          id: nanoid(),
          content: e.target.value,
        },
      ],
      currentItem: '',
    }));
  };

  const submitItemClick = (e) => {
    const itemContent = e.target.previousElementSibling.value;

    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      items: [
        ...prevInfo.items,
        {
          id: nanoid(),
          content: itemContent,
        },
      ],
      currentItem: '',
    }));
  };

  const deleteItem = (id) => {
    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      items: prevInfo.items.filter((item) => item.id !== id),
    }));
  };

  const itemBanners = categoryInfo.items.map((item) => (
    <ItemBanner
      key={item.id}
      id={item.id}
      name={item.content}
      deleteItem={deleteItem}
    />
  ));

  const submittedCategoryMarkup = data.map((submittedInfo) => (
    <CompletedBackgroundForm
      key={submittedInfo.id}
      id={submittedInfo.id}
      handleDelete={deleteCategory}
      handleEdit={editCategoryInfo}
      mainText={submittedInfo.category}
      subText={submittedInfo.items[0].content}
    />
  ));

  return (
    <section className="form form__container form__other-info">
      <h1 className="form-title">Other Info</h1>
      {data.length ? submittedCategoryMarkup : ''}
      <span>
        Only fill this out if you deem it important or if your CV preview still
        has space
      </span>

      <fieldset className="form-fieldset form__other-info">
        <label className="form-label">
          Add a category (ex. Languages/Interests/Awards)
          <input
            type="text"
            name="category"
            className="form-input form-input__other-info-category"
            placeholder="Languages"
            value={categoryInfo.category}
            onChange={handleChange}
          />
        </label>

        {categoryInfo.category && (
          <label className="form-label">
            Add an itemf in {categoryInfo.category}
            <div className="form-input__submitted-items">
              {categoryInfo.items.length ? itemBanners : ''}
              <input
                type="text"
                name="currentItem"
                className="form-input form-input__items form-input__cumulative"
                placeholder="Photoshop"
                onKeyDown={submitItemKey}
                onChange={handleChange}
                value={categoryInfo.currentItem}
              />
              <button
                type="button"
                className="btn btn__submit"
                onClick={submitItemClick}
              >
                +
              </button>
            </div>
          </label>
        )}
      </fieldset>

      <button
        type="submit"
        className="btn btn__submit"
        onClick={submitCategoryInfo}
      >
        Set info
      </button>
    </section>
  );
}

export default OtherInfo;

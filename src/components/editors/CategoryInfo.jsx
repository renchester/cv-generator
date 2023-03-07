import { useEffect, useState } from 'react';

import { nanoid } from 'nanoid';

import FormBanner from './FormBanner';
import ItemBanner from './ItemBanner';

function CategoryInfo(props) {
  const { data, handleSubmit, handleDelete, infoType } = props;

  const emptyState = { category: '', items: [], currentItem: '', id: '' };

  const [categoryInfo, setCategoryInfo] = useState(
    JSON.parse(localStorage.getItem(`cv${infoType}`)) || emptyState,
  );

  useEffect(() => {
    localStorage.setItem(`cv${infoType}`, JSON.stringify(categoryInfo));
  }, [categoryInfo]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      [name]: value,
    }));
  };

  const editCategoryInfo = (id) => {
    // Show warning
    handleDelete(id, infoType);

    const target = data.find((item) => item.id === id);

    setCategoryInfo(Object.assign(target, { currentItem: '' }));
  };

  const submitCategoryInfo = (e) => {
    e.preventDefault();

    if (!categoryInfo.category || !categoryInfo.items.length) return;

    handleSubmit(e, infoType);
    setCategoryInfo(emptyState);
  };

  const submitItem = (e) => {
    let targetElement;

    if (e.type === 'keydown' && e.key !== 'Enter') return;

    e.preventDefault();

    if (e.type === 'click') {
      targetElement = e.target.previousElementSibling;
    } else if (e.key === 'Enter') {
      targetElement = e.target;
    }

    if (!targetElement.value) return;

    setCategoryInfo((prevInfo) => ({
      ...prevInfo,
      items: [
        ...prevInfo.items,
        {
          id: nanoid(),
          content: targetElement.value,
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
    <FormBanner
      key={submittedInfo.id}
      id={submittedInfo.id}
      handleDelete={handleDelete}
      handleEdit={editCategoryInfo}
      mainText={submittedInfo.category}
      subText={submittedInfo.items[0].content}
      type={infoType}
    />
  ));

  return (
    <form
      className="form form__container form__other-info"
      onSubmit={submitCategoryInfo}
      onKeyDown={(e) => {
        if (e.key === 'Enter') e.preventDefault();
      }}
    >
      <h1 className="form-title">
        {infoType === 'skillsInfo' ? 'Technical Skills' : 'Other Info'}
      </h1>
      <span className="form-subtitle">
        {infoType === 'skillsInfo'
          ? "Showcase the most relevant skills applicable to the job you're applying for"
          : "Only fill this out if it's important to the job you're applying for or if your CV still has space in the preview"}
      </span>

      {data.length ? (
        <div className="form-banner__container">{submittedCategoryMarkup}</div>
      ) : (
        ''
      )}

      <fieldset className="form-fieldset form__other-info">
        <label className="form-label">
          <span className="form-label__title">
            {infoType === 'skillsInfo'
              ? ' Add a skill category'
              : ' Add a category (ex. Languages/Awards)'}
          </span>
          <input
            type="text"
            name="category"
            className="form-input form-input__item-category"
            placeholder={infoType === 'skillsInfo' ? 'Design' : 'Languages'}
            value={categoryInfo.category}
            onChange={handleChange}
            required
          />
        </label>

        {categoryInfo.category && (
          <label className="form-label">
            <span className="form-label__title">
              Add {infoType === 'skillsInfo' ? 'a skill' : 'an item'} in{' '}
              {categoryInfo.category}
            </span>
            <div className="form-input__submitted-items">
              <div className="submitted-item__container">
                {categoryInfo.items.length ? itemBanners : ''}
              </div>

              <div className="form-input__items-wrapper">
                <input
                  type="text"
                  name="currentItem"
                  className="form-input form-input__items form-input__cumulative"
                  placeholder={
                    infoType === 'skillsInfo' ? 'Photoshop' : 'English(Fluent)'
                  }
                  onKeyDown={submitItem}
                  onChange={handleChange}
                  value={categoryInfo.currentItem}
                />
                <button
                  type="button"
                  className="btn btn__submit-item material-symbols-outlined"
                  onClick={submitItem}
                >
                  add
                </button>
              </div>
            </div>
          </label>
        )}
      </fieldset>

      <button type="submit" className="btn btn__submit">
        Submit {infoType === 'skillsInfo' ? 'skill info' : 'info'}
      </button>
    </form>
  );
}

export default CategoryInfo;

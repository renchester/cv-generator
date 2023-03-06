import { useState } from 'react';

import { nanoid } from 'nanoid';

import FormBanner from './FormBanner';
import ItemBanner from './ItemBanner';

function OtherInfo(props) {
  const { data, handleSubmit, handleDelete, infoType } = props;

  const emptyState = { category: '', items: [], currentItem: '', id: '' };

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
          ? ''
          : 'Only fill this out if you deem it important or if your CV preview still has space'}
      </span>

      {data.length ? submittedCategoryMarkup : ''}

      <fieldset className="form-fieldset form__other-info">
        <label className="form-label">
          {infoType === 'skillsInfo'
            ? ' Add a skill category'
            : ' Add a category (ex. Languages/Interests/Awards)'}
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
            Add {infoType === 'skillsInfo' ? 'a skill' : 'an item'} in{' '}
            {categoryInfo.category}
            <div className="form-input__submitted-items">
              {categoryInfo.items.length ? itemBanners : ''}
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
                className="btn btn__submit"
                onClick={submitItem}
              >
                +
              </button>
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

export default OtherInfo;

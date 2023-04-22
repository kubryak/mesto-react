import { useState, useEffect } from 'react';
import PopupWithForm from './PopupWithForm.jsx';

export default function AddCardPopup({ isOpen, onClose, onUpdateCard, buttonText }) {

  const [name, setName] = useState('');
  const [link, setLink] = useState('');

  function handleCardNameChange(e) {
    setName(e.target.value);
  }

  function handleCardLinkChange(e) {
    setLink(e.target.value);
  }

  function handleSubmitCard(e) {
    e.preventDefault();
    onUpdateCard({
      name: name,
      link: link
    });
    setName('');
    setLink('');
  }

  useEffect(() => {
    setName('');
    setLink('');
  }, [isOpen])

  return (
    <PopupWithForm
      name={'card'}
      title={'Новое место'}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitCard}
    >
      <input
        type="text"
        className="popup__input popup__input_type_img-name"
        name="name"
        placeholder="Название"
        id="popup__img"
        value={name}
        onChange={handleCardNameChange}
        required
        minLength="2"
        maxLength="30" />
      <span className="popup__input-error popup__img-error"></span>
      <input
        type="url"
        className="popup__input popup__input_type_img-link"
        name="link"
        placeholder="Ссылка на картинку"
        id="popup__link"
        value={link}
        onChange={handleCardLinkChange}
        required />
      <span className="popup__input-error popup__link-error"></span>
    </PopupWithForm>
  )
}
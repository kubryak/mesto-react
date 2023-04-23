import { useState, useEffect, useRef } from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import { useInput } from '../utils/useInput.js';

export default function AddCardPopup({ isOpen, onClose, onUpdateCard, buttonText }) {

  const cardName = useRef();
  const cardLink = useRef();

  const name = useInput('', { isEmpty: true, minLength: 2 });
  const link = useInput('', { isEmpty: true, minLength: 0, isUrl: false });

  const [errorMessageName, setErrorMessageName] = useState('');
  const [errorMessageLink, setErrorMessageLink] = useState('');

  useEffect(() => {
    cardName.current.value = '';
    cardLink.current.value = '';
  }, [isOpen])

  useEffect(() => {
    name.setInputValid(true);
    link.setInputValid(true);
    setErrorMessageName('');
    setErrorMessageLink('');
  }, [onClose])

  function handleCardNameChange(e) {
    name.onChange(e);
    setErrorMessageName(e.target.validationMessage);
  }

  function handleCardLinkChange(e) {
    link.onChange(e);
    setErrorMessageLink(e.target.validationMessage);
  }

  function handleSubmitCard(e) {
    e.preventDefault();
    onUpdateCard({
      name: cardName.current.value,
      link: cardLink.current.value
    });
  }

  return (
    <PopupWithForm
      name={'card'}
      title={'Новое место'}
      buttonText={buttonText}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitCard}
      onDisabled={!name.inputValid || !link.inputValid}
    >
      <input
        type="text"
        className="popup__input popup__input_type_img-name"
        name="formname"
        ref={cardName}
        placeholder="Название"
        id="popup__img"
        onChange={handleCardNameChange}
        onFocus={name.onFocus}
        required
        minLength="2"
        maxLength="30" />
      {(
        (name.isDirty && name.isEmpty) ||
        (name.isDirty && name.minLengthError)) &&
        <span className="popup__input-error popup__img-error popup__input-error_active">
          {errorMessageName}
        </span>
      }
      <input
        type="url"
        className="popup__input popup__input_type_img-link"
        name="formlink"
        ref={cardLink}
        placeholder="Ссылка на картинку"
        id="popup__link"
        onChange={handleCardLinkChange}
        onFocus={link.onFocus}
        required />
      {(
        (link.isDirty && link.isEmpty) ||
        (link.isDirty && link.urlError) ||
        (link.isDirty && link.minLengthError)) &&
        <span className="popup__input-error popup__link-error popup__input-error_active">
          {errorMessageLink}
        </span>
      }
    </PopupWithForm>
  )
}

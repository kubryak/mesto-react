import { useState, useEffect, useContext } from 'react';
import PopupWithForm from './PopupWithForm.jsx';
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx';

export default function EditProfilePopup({ isOpen, onClose, onUpdateUser, buttonText }) {

  const currentUser = useContext(CurrentUserContext);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [isOpen]);

  function handleNameChange(e) {
    setName(e.target.value);
  }

  function handleDescriptionChange(e) {
    setDescription(e.target.value);
  }

  function handleSubmitProfile(e) {
    e.preventDefault();
    onUpdateUser({ name: name, about: description });
  }

  return (
    <PopupWithForm
      name={'profile'}
      title={'Редактировать профиль'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitProfile}
      buttonText={buttonText}
    >
      <input
        type="text"
        className="popup__input popup__input_type_name"
        name="name" placeholder="Введите имя"
        id="popup__name" value={name}
        onChange={handleNameChange}
        required
        minLength="2"
        maxLength="40"
      />
      <span className="popup__input-error popup__name-error"></span>
      <input
        type="text"
        className="popup__input popup__input_type_description"
        name="description"
        placeholder="Введите описание"
        id="popup__description"
        value={description}
        onChange={handleDescriptionChange}
        required minLength="2"
        maxLength="200"
      />
      <span className="popup__input-error popup__description-error"></span>
    </PopupWithForm>
  )
}
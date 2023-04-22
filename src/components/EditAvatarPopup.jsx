import { useState, useEffect, useRef } from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

  const currentUser = useState(CurrentUserContext);
  const avatarInputRef = useRef();

  useEffect(() => {
    avatarInputRef.current.value = '';
  });

  function handleSubmitAvatar(e) {
    e.preventDefault();
    onUpdateAvatar({avatar: avatarInputRef.current.value});
  }

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitAvatar}
    >
      <input type="url" className="popup__input popup__input_type_avatar" name="link" placeholder="Ссылка на картинку"
        id="popup__avatar" ref={avatarInputRef} required />
      <span className="popup__input-error popup__avatar-error"></span>
    </PopupWithForm>
  )
}
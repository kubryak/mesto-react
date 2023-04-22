import { useRef, useEffect } from "react";
import PopupWithForm from "./PopupWithForm";

export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, buttonText }) {

  const avatarInputRef = useRef();

  function handleSubmitAvatar(e) {
    e.preventDefault();
    onUpdateAvatar({ avatar: avatarInputRef.current.value });
  }

  useEffect(() => {
    avatarInputRef.current.value = '';
  }, [isOpen])

  return (
    <PopupWithForm
      name={'avatar'}
      title={'Обновить аватар'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmitAvatar}
      buttonText={buttonText}
    >
      <input
        type="url"
        className="popup__input popup__input_type_avatar"
        name="link"
        placeholder="Ссылка на картинку"
        id="popup__avatar"
        ref={avatarInputRef}
        required
      />
      <span className="popup__input-error popup__avatar-error"></span>
    </PopupWithForm>
  )
}
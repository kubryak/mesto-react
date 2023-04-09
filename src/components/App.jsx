import React from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx'
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';

export default function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditAddPlacePopupOpen, setEditAddPlacePopupOpen] = React.useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = React.useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setImagePopupOpen(true);
    setSelectedCard(card);
  }

  function handleDeleteCardClick() {
    setDeleteCardPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddPlacePopupOpen(false);
    setImagePopupOpen(false);
    setDeleteCardPopupOpen(false);
    setSelectedCard({})
  }

  return (
    <div className='page'>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onEditAvatar={handleEditAvatarClick}
        onAddPlace={handleAddPlaceClick}
        onCardClick={handleCardClick}
        onDeleteImage={handleDeleteCardClick}
      />
      <Footer />
      <PopupWithForm
        name={'profile'}
        title={'Редактировать профиль'}
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form popup__form-profile" name='profile-form' noValidate>
          <fieldset className="popup__form-set">
            <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Введите имя"
              id="popup__name" required minLength="2" maxLength="40" />
            <span className="popup__input-error popup__name-error"></span>
            <input type="text" className="popup__input popup__input_type_description" name="description"
              placeholder="Введите описание" id="popup__description" required minLength="2" maxLength="200" />
            <span className="popup__input-error popup__description-error"></span>
            <button type="submit" className="popup__submit-popup-btn">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'avatar'}
        title={'Обновить аватар'}
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form popup__form-avatar" name="profile-form" noValidate>
          <fieldset className="popup__form-set">
            <input type="url" className="popup__input popup__input_type_avatar" name="link" placeholder="Ссылка на картинку"
              id="popup__avatar" required />
            <span className="popup__input-error popup__avatar-error"></span>
            <button type="submit" className="popup__submit-popup-btn popup__submit-popup-btn_type_avatar">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'card'}
        title={'Новое место'}
        isOpen={isEditAddPlacePopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form popup__form-card" name="mesto-form" noValidate>
          <fieldset className="popup__form-set">
            <input type="text" className="popup__input popup__input_type_img-name" name="name" placeholder="Название"
              id="popup__img" required minLength="2" maxLength="30" />
            <span className="popup__input-error popup__img-error"></span>
            <input type="url" className="popup__input popup__input_type_img-link" name="link"
              placeholder="Ссылка на картинку" id="popup__link" required />
            <span className="popup__input-error popup__link-error"></span>
            <button type="submit" className="popup__submit-popup-btn">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm
        name={'delete-image'}
        title={'Вы уверены?'}
        isOpen={isDeleteCardPopupOpen}
        onClose={closeAllPopups}
      >
        <form className="popup__form popup__form-delete" name="mesto-form" noValidate>
          <button type="submit" className="popup__submit-popup-btn popup__submit-popup-btn_type_delete-image">Да</button>
        </form>
      </PopupWithForm>
      <ImagePopup
        name={'image'}
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </div>
  );
}

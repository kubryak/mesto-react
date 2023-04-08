import React from 'react';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js'
import PopupWithForm from './PopupWithForm.js';
import PopupWithImage from './PopupWithImage.js';

export default function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false);
  const [isEditAddPlacePopupOpen, setEditAddPlacePopupOpen] = React.useState(false);

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setEditAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false);
    setEditProfilePopupOpen(false);
    setEditAddPlacePopupOpen(false);
  }

  return (
    <div className='page'>
      <Header />
      <Main onEditProfile={handleEditProfileClick} onEditAvatar={handleEditAvatarClick} onAddPlace={handleAddPlaceClick} onClose={closeAllPopups} />
      <Footer />
      <PopupWithForm name={'profile'} title={'Редактировать профиль'} isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form popup__form-profile" name='profile-form' novalidate>
          <fieldset className="popup__form-set">
            <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Введите имя"
              id="popup__name" required minlength="2" maxlength="40" />
            <span className="popup__input-error popup__name-error"></span>
            <input type="text" className="popup__input popup__input_type_description" name="description"
              placeholder="Введите описание" id="popup__description" required minlength="2" maxlength="200" />
            <span className="popup__input-error popup__description-error"></span>
            <button type="submit" className="popup__submit-popup-btn">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm name={'avatar'} title={'Обновить аватар'} isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}>
        <form className="popup__form popup__form-avatar" name="profile-form" novalidate>
          <fieldset className="popup__form-set">
            <input type="url" className="popup__input popup__input_type_avatar" name="link" placeholder="Ссылка на картинку"
              id="popup__avatar" required />
            <span className="popup__input-error popup__avatar-error"></span>
            <button type="submit" className="popup__submit-popup-btn popup__submit-popup-btn_type_avatar">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
      <PopupWithForm name={'card'} title={'Новое место'} isOpen={isEditAddPlacePopupOpen} onClose={closeAllPopups}>
        <form className="popup__form popup__form-card" name="mesto-form" novalidate>
          <fieldset className="popup__form-set">
            <input type="text" className="popup__input popup__input_type_img-name" name="name" placeholder="Название"
              id="popup__img" required minlength="2" maxlength="30" />
            <span className="popup__input-error popup__img-error"></span>
            <input type="url" className="popup__input popup__input_type_img-link" name="link"
              placeholder="Ссылка на картинку" id="popup__link" required />
            <span className="popup__input-error popup__link-error"></span>
            <button type="submit" className="popup__submit-popup-btn">Сохранить</button>
          </fieldset>
        </form>
      </PopupWithForm>
    </div>

    // <template id="photogrid">
    //   <li className="photo-grid__list-item">
    //     <img className="photo-grid__item" />
    //     <div className="photo-grid__description">
    //       <h2 className="photo-grid__title"></h2>
    //       <div className="photo-grid__like">
    //         <button type="button" className="photo-grid__like-photo"></button>
    //         <p className="photo-grid__like-amount">0</p>
    //       </div>
    //     </div>
    //     <button type="button" className="photo-grid__delete-photo"></button>
    //   </li>
    // </template>
  );
}

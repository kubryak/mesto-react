import { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx'
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import { api } from '../utils/api.js';
import { CurrentUserContext } from '../contexts/CurrentUserContext.jsx';
import { CardContext } from '../contexts/CardContex.jsx';

export default function App() {

  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
  const [isEditAddPlacePopupOpen, setEditAddPlacePopupOpen] = useState(false);
  const [isImagePopupOpen, setImagePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setDeleteCardPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});

  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch(err => console.log(err));
    api.getCards()
      .then((res) => {
        setCards(res);
      })
      .catch(err => console.log(err));
  }, [])

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
  
  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    api.changeLikeCardStatus(card._id, isLiked)
      .then((newCard) => {
        setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
      })
      .catch(err => console.log(err))
  }

  function handleCardDelete(card) {
    api.deleteCard(card._id)
      .then(setCards((state) => state.filter((c) => c._id !== card._id)))
      .catch(err => console.log(err))
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
    <CurrentUserContext.Provider value={currentUser}>
      <CardContext.Provider value={cards}>
        <div className='page'>
          <Header />
          <Main
            onEditProfile={handleEditProfileClick}
            onEditAvatar={handleEditAvatarClick}
            onAddPlace={handleAddPlaceClick}
            onCardClick={handleCardClick}
            onCardDelete={handleCardDelete}
            onCardLike={handleCardLike}
          />
          <Footer />
          <PopupWithForm
            name={'profile'}
            title={'Редактировать профиль'}
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
          >
            <input type="text" className="popup__input popup__input_type_name" name="name" placeholder="Введите имя"
              id="popup__name" required minLength="2" maxLength="40" />
            <span className="popup__input-error popup__name-error"></span>
            <input type="text" className="popup__input popup__input_type_description" name="description"
              placeholder="Введите описание" id="popup__description" required minLength="2" maxLength="200" />
            <span className="popup__input-error popup__description-error"></span>
          </PopupWithForm>
          <PopupWithForm
            name={'avatar'}
            title={'Обновить аватар'}
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
          >
            <input type="url" className="popup__input popup__input_type_avatar" name="link" placeholder="Ссылка на картинку"
              id="popup__avatar" required />
            <span className="popup__input-error popup__avatar-error"></span>
          </PopupWithForm>
          <PopupWithForm
            name={'card'}
            title={'Новое место'}
            isOpen={isEditAddPlacePopupOpen}
            onClose={closeAllPopups}
          >
            <input type="text" className="popup__input popup__input_type_img-name" name="name" placeholder="Название"
              id="popup__img" required minLength="2" maxLength="30" />
            <span className="popup__input-error popup__img-error"></span>
            <input type="url" className="popup__input popup__input_type_img-link" name="link"
              placeholder="Ссылка на картинку" id="popup__link" required />
            <span className="popup__input-error popup__link-error"></span>
          </PopupWithForm>
          <PopupWithForm
            name={'delete-image'}
            title={'Вы уверены?'}
            buttonText={'Да'}
            isOpen={isDeleteCardPopupOpen}
            onClose={closeAllPopups}
          >
          </PopupWithForm>
          <ImagePopup
            name={'image'}
            card={selectedCard}
            isOpen={isImagePopupOpen}
            onClose={closeAllPopups}
          />
        </div>
      </CardContext.Provider>
    </CurrentUserContext.Provider>
  );
}

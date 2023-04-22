import { useEffect, useState } from 'react';
import Footer from './Footer.jsx';
import Header from './Header.jsx';
import Main from './Main.jsx'
import PopupWithForm from './PopupWithForm.jsx';
import ImagePopup from './ImagePopup.jsx';
import EditProfilePopup from './EditProfilePopup.jsx';
import EditAvatarPopup from './EditAvatarPopup.jsx';
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

  // function handleDeleteCardClick() {
  //   setDeleteCardPopupOpen(true);
  // }

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

  function handleUpdateUser(name, description) {
    api.setUserInfo(name, description)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
    closeAllPopups();
  }

  function handleUpdateAvatar(avatar) {
    api.setNewAvatar(avatar)
      .then(res => setCurrentUser(res))
      .catch(err => console.log(err))
    closeAllPopups();
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
          <EditProfilePopup
            isOpen={isEditProfilePopupOpen}
            onClose={closeAllPopups}
            onUpdateUser={handleUpdateUser}
          />
          <EditAvatarPopup
            isOpen={isEditAvatarPopupOpen}
            onClose={closeAllPopups}
            onUpdateAvatar={handleUpdateAvatar}
          />
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

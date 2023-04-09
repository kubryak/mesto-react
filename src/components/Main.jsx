import { useState, useEffect } from 'react';
import { api } from '../utils/api.js';
import Card from './Card.jsx';

export default function Main({ onEditAvatar, onEditProfile, onCardClick, onClick, onDeleteImage, onAddPlace }) {

  const [userName, setUserName] = useState('');
  const [userDescription, setUserDescription] = useState('');
  const [userAvatar, setUserAvatar] = useState('');

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar)
      })
      .catch((err) => console.log(err));
    api.getCards()
      .then((res) => {
        setCards(res);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <button className="profile__avatar-btn" onClick={onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__profile-name">{userName}</h1>
          <button type="button" className="profile__edit-profile-info-btn" onClick={onEditProfile}></button>
          <p className="profile__profile-description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-mesto-btn" onClick={onAddPlace}></button>
      </section>
      <section className="photo-grid" aria-label="Фотографии, добавленные пользователем">
        <ul className="photo-grid__list">
          {
            cards.map((card) => (
              <Card key={card._id} card={card} onCardClick={onCardClick} onDeleteImage={onDeleteImage} />
            ))
          }
        </ul>
      </section>
    </main >
  )
}

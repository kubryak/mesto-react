import React from 'react';
import { api } from '../utils/api.js';

export default function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');

  React.useEffect(() => {
    api.getUserInfo()
    .then((res) => {
      setUserName(res.name);
      setUserDescription(res.about);
      setUserAvatar(res.avatar)
    })
  });

  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <button className="profile__avatar-btn" onClick={props.onEditAvatar}>
            <img src={userAvatar} alt="Аватар" className="profile__avatar" />
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__profile-name">{userName}</h1>
          <button type="button" className="profile__edit-profile-info-btn" onClick={props.onEditProfile}></button>
          <p className="profile__profile-description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-mesto-btn" onClick={props.onAddPlace}></button>
      </section>

      <section className="photo-grid" aria-label="Фотографии, добавленные пользователем">
        <ul className="photo-grid__list">
        </ul>
      </section>
    </main>
  )
}

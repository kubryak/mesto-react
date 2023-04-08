export default function Main(props) {
  return (
    <main className="content">
      <section className="profile">
        <div className="profile__avatar-edit">
          <button className="profile__avatar-btn" onClick={props.onEditAvatar}>
            <img src="<%=require('./images/avatar.jpg')%>" alt="Аватар" className="profile__avatar" />
          </button>
        </div>
        <div className="profile__profile-info">
          <h1 className="profile__profile-name">Жак-Ив Кусто</h1>
          <button type="button" className="profile__edit-profile-info-btn" onClick={props.onEditProfile}></button>
          <p className="profile__profile-description">Исследователь океана</p>
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

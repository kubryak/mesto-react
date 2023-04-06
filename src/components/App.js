import '../App.css';
import Footer from './Footer';
import Header from './Header.js';
import Main from './Main.js'

function App() {
  return (
    <>
      <div className='root'>
        <Header />
        <Main />

        <section className="popup popup_type_avatar" aria-label="Редактирование профиля">
          <div className="popup__container popup__container_type_avatar">
            <h3 className="popup__title">Обновить аватар</h3>
            <form className="popup__form popup__form-avatar" name="profile-form" novalidate>
              <fieldset className="popup__form-set">
                <input type="url" className="popup__input popup__input_type_avatar" name="link" placeholder="Ссылка на картинку"
                  id="popup__avatar" required />
                <span className="popup__input-error popup__avatar-error"></span>
                <button type="submit" className="popup__submit-popup-btn popup__submit-popup-btn_type_avatar">Сохранить</button>
              </fieldset>
            </form>
            <button type="button" className="popup__close-btn popup__close-btn_type_profile"></button>
          </div>
        </section>

        <section className="popup popup_type_profile" aria-label="Редактирование профиля">
          <div className="popup__container">
            <h3 className="popup__title">Редактировать профиль</h3>
            <form className="popup__form popup__form-profile" name="profile-form" novalidate>
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
            <button type="button" className="popup__close-btn popup__close-btn_type_profile"></button>
          </div>
        </section>

        <section className="popup popup_type_card" aria-label="Окно для добавления новых фотографий">
          <div className="popup__container">
            <h3 className="popup__title">Новое место</h3>
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
            <button type="button" className="popup__close-btn popup__close-btn_type_mesto"></button>
          </div>
        </section>

        <section className="popup popup_type_image" aria-label="Окно просмотра увеличенной картинки">
          <div className="popup__figure-container">
            <figure className="popup__figure">
              <img className="popup__image" src="#" alt="#" />
              <figcaption className="popup__image-description"></figcaption>
            </figure>
            <button type="button" className="popup__close-btn popup__close-btn_type_image"></button>
          </div>
        </section>

        <section className="popup popup_type_delete-image" aria-label="Подтверждение удаления картинки">
          <div className="popup__container popup__container_type_delete-image">
            <h3 className="popup__title">Вы уверены?</h3>
            <button type="button" className="popup__close-btn popup__close-btn_type_profile"></button>
            <form className="popup__form popup__form-delete" name="mesto-form" novalidate>
              <button type="submit" className="popup__submit-popup-btn popup__submit-popup-btn_type_delete-image">Да</button>
            </form>
          </div>
        </section>
        <Footer />
      </div>

      <template id="photogrid">
        <li className="photo-grid__list-item">
          <img className="photo-grid__item" />
          <div className="photo-grid__description">
            <h2 className="photo-grid__title"></h2>
            <div className="photo-grid__like">
              <button type="button" className="photo-grid__like-photo"></button>
              <p className="photo-grid__like-amount">0</p>
            </div>
          </div>
          <button type="button" className="photo-grid__delete-photo"></button>
        </li>
      </template>
    </>
  );
}

export default App;

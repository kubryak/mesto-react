export default function PopupWithForm({ name, isOpen, title, onClose, buttonText, children }) {
  return (
    <section className={`popup ${isOpen && ('popup_opened')}`}>
      <div className={`popup__container popup__container_type_${name}`}>
        <h3 className="popup__title">{`${title}`}</h3>
        <form className={`popup__form popup__form-${name}`} name='profile-form' noValidate>
          <fieldset className="popup__form-set">
            {children}
            <button type="submit" className="popup__submit-popup-btn">{buttonText || 'Сохранить'}</button>
          </fieldset>
        </form>
        <button type="button" className="popup__close-btn popup__close-btn_type_profile" onClick={onClose}></button>
      </div>
    </section>
  )
}

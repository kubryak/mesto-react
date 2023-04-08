export default function PopupWithForm(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && ('popup_opened')}`}>
      <div className="popup__container">
        <h3 className="popup__title">{`${props.title}`}</h3>
        <button type="button" className="popup__close-btn popup__close-btn_type_profile" onClick={props.onClose}></button>
        {props.children}
      </div>
    </section>

  )
}

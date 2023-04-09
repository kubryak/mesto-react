export default function ImagePopup(props) {
  return (
    <section className={`popup popup_type_${props.name} ${props.isOpen && ('popup_opened')}`}>
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img className="popup__image" src={props.card.link} alt={props.card.name} />
          <figcaption className="popup__image-description">{props.card.name}</figcaption>
        </figure>
        <button type="button" className="popup__close-btn popup__close-btn_type_image" onClick={props.onClose}></button>
      </div>
    </section>
  )
}

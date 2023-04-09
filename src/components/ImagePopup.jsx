export default function ImagePopup({ card, isOpen, onClose }) {
  return (
    <section className={`popup ${isOpen && ('popup_opened')}`}>
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img className="popup__image" src={card.link} alt={card.name} />
          <figcaption className="popup__image-description">{card.name}</figcaption>
        </figure>
        <button type="button" className="popup__close-btn popup__close-btn_type_image" onClick={onClose}></button>
      </div>
    </section>
  )
}

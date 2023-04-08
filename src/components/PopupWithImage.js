export default function PopupWithForm() {
  return (
    <section className="popup popup_type_image" aria-label="Окно просмотра увеличенной картинки">
      <div className="popup__figure-container">
        <figure className="popup__figure">
          <img className="popup__image" src="#" alt="#" />
          <figcaption className="popup__image-description"></figcaption>
        </figure>
        <button type="button" className="popup__close-btn popup__close-btn_type_image"></button>
      </div>
    </section>
  )
}

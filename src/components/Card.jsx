
export default function Card({ card, onCardClick, onDeleteImage }) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <li className="photo-grid__list-item">
      <img className="photo-grid__item" src={card.link} alt={card.name} onClick={handleClick} />
      <div className="photo-grid__description">
        <h2 className="photo-grid__title">{card.name}</h2>
        <div className="photo-grid__like">
          <button type="button" className="photo-grid__like-photo"></button>
          <p className="photo-grid__like-amount">{card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="photo-grid__delete-photo" onClick={onDeleteImage}></button>
    </li>
  )
}

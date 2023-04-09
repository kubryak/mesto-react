
export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <li className="photo-grid__list-item">
      <img className="photo-grid__item" src={props.card.link} alt={props.card.name} onClick={handleClick} />
      <div className="photo-grid__description">
        <h2 className="photo-grid__title">{props.card.name}</h2>
        <div className="photo-grid__like">
          <button type="button" className="photo-grid__like-photo"></button>
          <p className="photo-grid__like-amount">{props.card.likes.length}</p>
        </div>
      </div>
      <button type="button" className="photo-grid__delete-photo" onClick={props.onDeleteImage}></button>
    </li>
  )
}

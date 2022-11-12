function Card({card, onCardClick, onTrashClick}) {

  function handleClick() {
    onCardClick(card);
  }

  return (<article className="item">
    <button className="item__delete-img" id="trash" onClick={onTrashClick}></button>
    <img src={card.link} id="photoGridImg" className="item__img" alt="картинка" onClick={handleClick}/>
    <div className="item__group-icon">
      <h2 className="item__text">{card.name}</h2>
      <div className="item__like-container">
        <button className="item__icon" id="like"></button>
        <div className="item__like-counter">{card.likes.length}</div>
      </div>
    </div>
  </article>)
}

export default Card;
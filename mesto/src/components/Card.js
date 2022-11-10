function Card(props) {

  function handleClick() {
    props.onCardClick(props.card);
  }

  return (<article className="item">
      <button className="item__delete-img" id="trash"></button>
      <img src={props.card.link} id="photoGridImg" className="item__img" alt="картинка" onClick={handleClick}/>
      <div className="item__group-icon">
        <h2 className="item__text">{props.card.name}</h2>
        <div className="item__like-container">
          <button className="item__icon" id="like"></button>
          <div className="item__like-counter">{props.card.likes.length}</div>
        </div>
      </div>
    </article>)
}

export default Card;
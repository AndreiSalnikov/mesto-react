import React from 'react'
import {api} from '../utils/Api'
import {userPath, cardsPath} from '../utils/utils'
import Card from "./Card";

function Main(props) {
  const [userName, setUserName] = React.useState("Загрузка...")
  const [userDescription, setUserDescription] = React.useState("Загрузка...")
  const [userAvatar, setUserAvatar] = React.useState("https://www.meme-arsenal.com/memes/9836e485f044f8566194374d7566cfe8.jpg")
  const [cards, setCards] = React.useState([])

   React.useEffect( () => {
  Promise.all([api.getServerInfo(userPath), api.getServerInfo(cardsPath)]).then(([userData, cards]) => {
    setUserName(userData.name);
    setUserDescription(userData.about);
    setUserAvatar(userData.avatar);
    setCards(cards);
  }).catch((err) => console.log(err))
      }, [])

  return (
    <>
    <div className="popup" id="popupDelete">
      <div className="popup__container">
        <button type="button" className="popup__close-button" title="Закрыть"/>
        <h3 className="popup__title">Вы уверены?</h3>
        <button type="button" className="popup__save-button">Да</button>
      </div>
    </div>


    <section className="profile">
      <div className="profile__left-group">
        <div className="profile__avatar" onClick={props.onEditAvatar}>
          <img src={userAvatar} alt="изображение профиля" className="profile__avatar-image"/>
        </div>
        <div className="profile__info">
          <h1 className="profile__title">{userName}</h1>
          <button type="button" aria-label="редактировать профиль" className="profile__edit-button"
                  onClick={props.onEditProfile}/>
          <p className="profile__subtitle">{userDescription}</p>
        </div>
      </div>
      <button type="button" aria-label="загрузить фото" className="profile__add-button" onClick={props.onAddPlace}/>
    </section>

    <section className="photo-grid">
      {cards.map((card) => (
        <Card
          key={card._id}
          card = {card}
          onCardClick={props.onCardClick}/>
      ))}
    </section>
  </>)
}

export default Main;
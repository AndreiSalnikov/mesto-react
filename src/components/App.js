import React from 'react'
import Header from "./Header";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import ConfirmPopup from "./ConfirmPopup"
import Footer from "./Footer";
import CurrentUserContext from "../contexts/CurrentUserContext";
import CardsContext from "../contexts/CardsContext";
import {api} from '../utils/api';
import {cardsPath, userPath} from '../utils/utils';

function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [cardForDelete, setCardForDelete] = React.useState(null)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)
  const [isConfirmPopupOpen, setConfirmPopupOpen] = React.useState(false)
  const [isLoading, setIsLoading] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState({
    name: "Загрузка...",
    about: "Загрузка...",
    avatar: "https://www.meme-arsenal.com/memes/9836e485f044f8566194374d7566cfe8.jpg"
  })
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getServerInfo(userPath), api.getServerInfo(cardsPath)]).then(([userData, cards]) => {
      setCurrentUser(userData);
      setCards(cards);
    }).catch((err) => console.log(err))
  }, [])

  function handleAddPlaceSubmit(data) {
    setIsLoading(true);
    api.addServerCard(data, cardsPath).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups()
    }).catch((err) => console.log(err)).finally(()=>setIsLoading(false))
  }

    function handleUpdateAvatar(data) {
    setIsLoading(true);
    api.setServerAvatar(data, userPath).then((data) => {
      setCurrentUser(data)
      closeAllPopups()
    }).catch((err) => console.log(err)).finally(()=>setIsLoading(false))
  }



  function handleUpdateUser(data) {
    setIsLoading(true);
    api.editServerProfileInfo(data, userPath).then((data) => {
      setCurrentUser(data);
      closeAllPopups()
    }).catch((err) => console.log(err)).finally(()=>setIsLoading(false))
  }

  function handleCardDelete(card) {
    setIsLoading(true);
    api.deleteServerCard(card._id, cardsPath).then(() => {
      setCards((state) => state.filter((c) => {
        return c._id !== card._id
      }))
      closeAllPopups();
    }).catch((err) => console.log(err)).finally(()=>setIsLoading(false))
  }


  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.changeLikeCardStatus(card._id, isLiked).then((newCard) => {
      setCards((state) => state.map((c) => c._id === card._id ? newCard : c));
    }).catch((err) => console.log(err))
  }

  function handleCardClick(card) {
    setSelectedCard(card)
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
  }

  function handleConfirmPopupClick(card) {
    setCardForDelete(card)
    setConfirmPopupOpen(true);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setConfirmPopupOpen(false);
    setSelectedCard(null);
  }

  return (
      <>
        <CurrentUserContext.Provider value={currentUser}>
          <CardsContext.Provider value={cards}>
            <Header/>
            <Main
                onCardLike={handleCardLike}
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
                onTrashClick={handleConfirmPopupClick}
            />

            <EditProfilePopup
                isLoading={isLoading}
                onUpdateUser={handleUpdateUser}
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            />
            <AddPlacePopup
                isLoading={isLoading}
                onAddCard={handleAddPlaceSubmit}
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            />
            <EditAvatarPopup
                isLoading={isLoading}
                onUpdateAvatar={handleUpdateAvatar}
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            />
            <ImagePopup
                card={selectedCard}
                onClose={closeAllPopups}>
            </ImagePopup>
            <ConfirmPopup
                isLoading={isLoading}
                card={cardForDelete}
                onCardDelete={handleCardDelete}
                isOpen={isConfirmPopupOpen}
                onClose={closeAllPopups}
            >
            </ConfirmPopup>
            <Footer/>
          </CardsContext.Provider>
        </CurrentUserContext.Provider>
      </>)
}

export default App;

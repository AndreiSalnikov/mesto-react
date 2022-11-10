import React from 'react'
import Header from "./Header";
import Main from "./Main";
import EditProfilePopup from "./EditProfilePopup";
import AddPlacePopup from "./AddPlacePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import ImagePopup from "./ImagePopup";
import Footer from "./Footer";


function App() {

  const [selectedCard, setSelectedCard] = React.useState(null)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = React.useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = React.useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = React.useState(false)

  const closeOnEsc = (event) => {
    if (event.key === "Escape") {
      closeAllPopups();
    }
  }

  const closePopupOverlay = (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
      closeAllPopups();
    }
  }

  function handleCardClick(card) {
    setSelectedCard(card)
    window.addEventListener('keydown', closeOnEsc);//подумать про useEffect
    window.addEventListener('mousedown', closePopupOverlay);
  }

  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true);
    window.addEventListener('keydown', closeOnEsc);//подумать про useEffect
    window.addEventListener('mousedown', closePopupOverlay);
  }

  function handleEditProfileClick() {
    setEditProfilePopupOpen(true);
    window.addEventListener('keydown', closeOnEsc);
    window.addEventListener('mousedown', closePopupOverlay);
  }

  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true);
    window.addEventListener('keydown', closeOnEsc);
    window.addEventListener('mousedown', closePopupOverlay);
  }

  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null);
    window.removeEventListener('keydown', closeOnEsc)
    window.removeEventListener('click', closePopupOverlay)
  }

  return (<>
    <meta charSet="UTF-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <title>Место</title>
    <Header/>
    <Main
      onEditProfile={handleEditProfileClick}
      onAddPlace={handleAddPlaceClick}
      onEditAvatar={handleEditAvatarClick}
      onCardClick={handleCardClick}/>

    <EditProfilePopup
      isOpen={isEditProfilePopupOpen}
      onClose={closeAllPopups}
    />
    <AddPlacePopup
      isOpen={isAddPlacePopupOpen}
      onClose={closeAllPopups}
    />
    <EditAvatarPopup
      isOpen={isEditAvatarPopupOpen}
      onClose={closeAllPopups}
    />
    <ImagePopup
      card={selectedCard}
      onClose={closeAllPopups}>
    </ImagePopup>
    <Footer/>
  </>)
}

export default App;

import PopupWithForm from './PopupWithForm'

function AddPlacePopup(props) {
  return (
    <PopupWithForm
      name={'editAddForm'}
      id={'popupAddCard'}
      title={'Новое место'}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        type="text"
        id="inputAddPlace"
        name="name"
        placeholder="Название"
        className="popup__info popup__info_text_title"
        minLength={2}
        maxLength={30}
        required/>
      <span className="popup__input" id="inputAddPlace-error"/>
      <input
        type="url"
        id="inputAddLink"
        name="link"
        placeholder="Ссылка на картинку"
        className="popup__info popup__info_text_link"
        required/>
      <span className="popup__input" id="inputAddLink-error"/>
    </PopupWithForm>
  )
}


export default AddPlacePopup;
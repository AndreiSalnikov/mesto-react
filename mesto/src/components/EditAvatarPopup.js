import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup(props) {
  return (
    <PopupWithForm
      name={'editAvatarForm'}
      id={'popupEditAvatar'}
      title={'Обновить аватар'}
      isOpen={props.isOpen}
      onClose={props.onClose}
    >
      <input
        type="url"
        id="inputEditLink"
        name="link"
        placeholder="Ссылка на аватар"
        className="popup__info popup__info_text_link"
        required/>
      <span className="popup__input" id="inputEditLink-error"/>
    </PopupWithForm>)
}


export default EditAvatarPopup;
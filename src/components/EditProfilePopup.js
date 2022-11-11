import PopupWithForm from './PopupWithForm'

function EditProfilePopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='editProfileForm'
      id='popupEditProfile'
      title='Редактировать профиль'
      textOnButton='Сохранить'
      isOpen={isOpen}
      onClose={onClose}
    >
      <input
        type="text"
        id="inputProfileName"
        name="name"
        placeholder="имя"
        className="popup__info popup__info_text_name"
        minLength={2}
        maxLength={40}
        required/>
      <span className="popup__input" id="inputProfileName-error"/>
      <input
        type="text" id="inputProfileJob"
        name="about" placeholder="профессия"
        className="popup__info popup__info_text_job"
        minLength={2}
        maxLength={200}
        required/>
      <span className="popup__input" id="inputProfileJob-error"/>
    </PopupWithForm>)
}


export default EditProfilePopup;


import PopupWithForm from "./PopupWithForm";


function ConfirmPopup({isOpen, onClose}) {
  return (<PopupWithForm
      name='editProfileForm'
      id='popupDelete'
      title='Вы уверены?'
      textOnButton='Да'
      isOpen={isOpen}
      onClose={onClose}
    >
    </PopupWithForm>

  )
}

export default ConfirmPopup
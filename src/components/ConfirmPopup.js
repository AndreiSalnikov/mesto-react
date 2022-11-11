import PopupWithForm from "./PopupWithForm";

export default function ConfirmPopup({isOpen, onClose}) {
  return (
    <PopupWithForm
      name='editProfileForm'
      id='popupDelete'
      title='Вы уверены?'
      textOnButton = 'Да'
      isOpen={isOpen}
      onClose={onClose}
      >
    </PopupWithForm>
  )
}
import React from "react";

function PopupWithForm({name, id, title, onClose, isOpen,textOnButton, children}) {

    React.useEffect(() => {
    if (isOpen) {
      function handleEsc(evt) {
        if (evt.key === 'Escape') {
          onClose();
        }
      }

      document.addEventListener('keydown', handleEsc);

      return () => {
        document.removeEventListener('keydown', handleEsc);
      }
    }
  }, [isOpen,onClose]);

  const closePopupOverlay = (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
      onClose();
    }
  }

  return (

    <div className={isOpen ? "popup popup_opened" : "popup"} id={id} onClick={closePopupOverlay}>
      <div className="popup__container">
        <button type="button" className="popup__close-button" title="Закрыть" onClick={onClose}/>
        <h3 className="popup__title">{title}</h3>
        <form name={name} id="popupEditForm" className="popup__form" noValidate>
          {children}
          <button type="submit" id="submitEditButton" className="popup__save-button">{textOnButton}</button>
        </form>
      </div>
    </div>);
}

export default PopupWithForm;

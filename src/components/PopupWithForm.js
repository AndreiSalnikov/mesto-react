import React from "react";
import Popup from "./Popup";

function PopupWithForm({name, id, title, onClose, isOpen, textOnButton, children}) {

  return (<Popup isOpen={isOpen} onClose={onClose} id={id}>
    <div className="popup__container">
      <button type="button" className="popup__close-button" title="Закрыть" onClick={onClose}/>
      <h3 className="popup__title">{title}</h3>
      <form name={name} id="popupEditForm" className="popup__form" noValidate>
        {children}
        <button type="submit" id="submitEditButton" className="popup__save-button">{textOnButton}</button>
      </form>
    </div>
  </Popup>);
}

export default PopupWithForm;

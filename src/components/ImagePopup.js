import React from "react";

function ImagePopup({card, onClose}) {

      React.useEffect(() => {
    if (card) {
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
  }, [card,onClose]);

  const closePopupOverlay = (event) => {
    if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
      onClose();
    }

  }
  return (
    <div className={`popup popup_overlay_black ${card ? 'popup_opened' : ''}`} id="popupShowImg"
         onClick={closePopupOverlay}>
      <figure className="popup__figure">
        <button type="button" className="popup__close-button" id="closeButton-popupImg" title="Закрыть"
                onClick={onClose}/>
        <img className="popup__img" src={card ? card.link : ''} alt="картинка"/>
        <figcaption className="popup__figcaption" title={card ? card.name : ''}/>
      </figure>
    </div>)
}

export default ImagePopup;
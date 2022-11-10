function ImagePopup(props){
  return(
    <div className= {`popup popup_overlay_black ${props.card ? 'popup_opened' : ''}`} id="popupShowImg">
      <figure className="popup__figure">
        <button type="button" className="popup__close-button" id="closeButton-popupImg" title="Закрыть" onClick={props.onClose}/>
        <img className="popup__img" src={props.card ? props.card.link : ''} alt="картинка"/>
        <figcaption className="popup__figcaption"  title={props.card ? props.card.name : ''}/>
      </figure>
    </div>
  )
}

export default ImagePopup;
function PopupWithForm(props) {
  return (
    <div className={props.isOpen ? "popup popup_opened" : "popup"} id={props.id}>
    <div className="popup__container">
      <button type="button" className="popup__close-button" title="Закрыть" onClick={props.onClose}/>
      <h3 className="popup__title">{props.title}</h3>
      <form name={props.name} id="popupEditForm" className="popup__form" noValidate>
        {props.children}
        <button type="submit" id="submitEditButton" className="popup__save-button">Сохранить</button>
      </form>
    </div>
  </div>);
}

export default PopupWithForm;

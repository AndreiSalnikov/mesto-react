import React from "react";

export default function Popup({isOpen,onClose}) {
// Пока реализовал всё внутри компонентов, не разборался как связать компоненты между собой, чтобы был доступ к функциям. Нужно было это через классы и наследование сделать? :(
//   React.useEffect(() => {
//     if (isOpen) {
//       function handleEsc(evt) {
//         if (evt.key === 'Escape') {
//           onClose();
//         }
//       }
//
//       document.addEventListener('keydown', handleEsc);
//
//       return () => {
//         document.removeEventListener('keydown', handleEsc);
//       }
//     }
//   }, [isOpen,onClose]);
//
//     const closePopupOverlay = (event) => {
//     if (event.target.classList.contains('popup') || event.target.classList.contains('popup__close-button')) {
//       onClose();
//     }}

}
export const Modal = {
  wrapper: document.querySelector('.modal-wrapper'),
message: document.querySelector('span'),
buttonClose: document.querySelector('.close'),
  open() {
    Modal.wrapper.classList.add('open')
  },
  close() {
    Modal.wrapper.classList.remove('open')
  }
}

Modal.buttonClose.onClick = () => {
  Modal.close()
}
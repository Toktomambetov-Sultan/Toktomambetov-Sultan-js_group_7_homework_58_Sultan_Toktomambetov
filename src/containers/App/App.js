import React, { useState } from 'react';
import './App.css';
import Modal from '../../components/UI/Modal/Modal';

function App() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const closeModalWin = () => {
    setIsOpenModal(false);
  };
  const modalBtns =
    [
      { type: 'danger', label: 'Close', clicked: closeModalWin },
      { type: 'primary', label: 'Continue', clicked: () => alert("Hey!!You pressed 'Continue' button") },
    ];
  return (
    <div className="App">
      <Modal
        title="something"
        isOpen={isOpenModal}
        closed={closeModalWin}
        modalBtns={modalBtns}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse sint ut modi, ullam vitae blanditiis deleniti dolores vel accusamus quos sit sed architecto porro harum aspernatur sequi corrupti voluptas!
      </Modal>
      <button
        onClick={() => {
          setIsOpenModal(true);
        }}
      >Open modal</button>
    </div >
  );
}

export default App;

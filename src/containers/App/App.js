import React, { useState } from 'react';
import './App.css';
import Modal from '../../components/UI/Modal/Modal';
import Alert from '../../components/UI/Alert/Alert';

function App() {
  const [ShowModal, setShowModal] = useState(false);
  const [ShowAlert, setShowAlert] = useState(false);

  const closeModalWin = () => {
    setShowModal(false);
  };
  const CloseAlertWin = () => {
    setShowAlert(false);
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
        show={ShowModal}
        closed={closeModalWin}
        modalBtns={modalBtns}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse sint ut modi, ullam vitae blanditiis deleniti dolores vel accusamus quos sit sed architecto porro harum aspernatur sequi corrupti voluptas!
      </Modal>
      <button
        onClick={() => {
          setShowModal(true);
        }}
      >Open modal</button>
      <Alert
        closed={CloseAlertWin}
        color="#fff"
        show={ShowAlert}
        dismiss={() => alert("you pressed on cross.")}
      >
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque, labore.
      </Alert>
      <button
        onClick={
          () => setShowAlert(true)
        }>call alert function</button>
    </div >
  );
}

export default App;

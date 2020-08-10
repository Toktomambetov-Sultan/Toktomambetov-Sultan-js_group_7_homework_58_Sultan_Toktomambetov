import React, { useState } from 'react';
import './App.css';
import Modal from '../../components/UI/Modal/Modal';
import Alert from '../../components/UI/Alert/Alert';
import Alerts from '../../components/UI/Alerts/Alerts';

function App() {
  const [ShowModal, setShowModal] = useState(false);

  const closeModalWin = () => {
    setShowModal(false);
  };
  const modalBtns =
    [
      { type: 'danger', label: 'Close', clicked: closeModalWin },
      { type: 'primary', label: 'Continue', clicked: () => alert("Hey!!You pressed 'Continue' button") },
    ];
  return (
    <div className="App">
      <button
        onClick={
          () => setShowModal(true)
        }
        type="button"
        className="modal-btn"
      >
        open modal win
      </button>
      <Modal
        title="something"
        show={ShowModal}
        closed={closeModalWin}
        modalBtns={modalBtns}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse sint ut modi, ullam vitae blanditiis deleniti dolores vel accusamus quos sit sed architecto porro harum aspernatur sequi corrupti voluptas!
      </Modal>
      <Alerts >
        <Alert
          type="warning"
          dismiss={() => alert("you pressed on cross.")}
        >
          warning
        </Alert>
        <Alert
          type="primary"
        >
          primary
        </Alert>
        <Alert
          type="danger"
        >
          danger
        </Alert>
        <Alert
          type="success"
        >
          success
        </Alert>
      </Alerts>

    </div >
  );
}

export default App;

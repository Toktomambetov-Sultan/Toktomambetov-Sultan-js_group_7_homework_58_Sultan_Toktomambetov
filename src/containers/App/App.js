import React, { useState } from 'react';
import './App.css';
import Modal from '../../components/UI/Modal/Modal';
import Alert from '../../components/UI/Alert/Alert';

function App() {
  const [ShowModal, setShowModal] = useState(true);

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
      <Modal
        title="something"
        show={ShowModal}
        closed={closeModalWin}
        modalBtns={modalBtns}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi esse sint ut modi, ullam vitae blanditiis deleniti dolores vel accusamus quos sit sed architecto porro harum aspernatur sequi corrupti voluptas!
      </Modal>
      <div className="alerts">
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
      </div>
    </div >
  );
}

export default App;

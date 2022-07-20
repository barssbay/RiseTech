import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { FiTrash2 } from "react-icons/fi";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

function ModalCompRemove(props) {
  
  const {dataJob,setDataJob,item} = props;


  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }

    const removeJob = (job)=> {
        const removedData = [...dataJob].filter(item => item.job !== job)
        setDataJob(removedData)
    }
  return (
    <div>
      <button onClick={openModal}>
        <FiTrash2 />

      </button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div className='remove-modal'>
          {/* <img src={logo}  className="App-Logo" alt="logo" />
      */}
          <h3>Are you sure want to delete it ?</h3>
          <button className='canceled-button' onClick={() => closeModal()}>Cancel</button>
          <button onClick={() => removeJob(item.job)} className="trash-button">Approve</button>

        </div>
      </Modal>
    </div>
  );
}
export default ModalCompRemove;
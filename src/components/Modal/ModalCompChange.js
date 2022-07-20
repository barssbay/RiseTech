import React from 'react';
import Modal from 'react-modal';
import { useState } from 'react';
import { FiEdit2 } from "react-icons/fi";


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

function ModalCompChange(props) {

    const { dataJob, setDataJob, item, statusValue } = props;
    const [newStatus,setNewStatus] = useState()

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
    const changesStatus = (e) => {
        const newSta = e.target.value;
        setNewStatus(newSta)
    }
    
    const changeSave= () => {
    const  sstatusValue = [...dataJob, {
        statusValue:newStatus
    }];
      setDataJob(sstatusValue)
      setIsOpen(false);
    
    }
    return (
        <div>
            <button onClick={openModal}>
                <FiEdit2 />
            </button>

            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
            >
                <div className='changes-remove-modal'>

                    <h3 className='change-modal-header'>Job Edit</h3>
                    <input className='change-job-input' disabled value={item.job}></input>
                    <select className='remove-modal-option' onChange={changesStatus}>
                        <option value={'Trivial'}>Trivial</option>
                        <option value={'Urgent'}>Urgent</option>
                        <option value={'Regular'}>Regular</option>
                    </select>
                    <div className='changed-button'>
                        <button className='canceled-button' onClick={() => closeModal()}>Cancel</button>
                        <button  className="trash-button" onClick={() => changeSave()}>Save</button>
                    </div>


                </div>
            </Modal>
        </div>
    );
}
export default ModalCompChange;
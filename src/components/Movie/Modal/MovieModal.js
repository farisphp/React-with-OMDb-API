import React from 'react';
import Modal from 'react-modal';
import './MovieModal.css';

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

Modal.setAppElement('#root');

export default function MovieModal(props) {
    return (
        <div>
            <Modal
                isOpen={props.modalIsOpen}
                onRequestClose={props.closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <button onClick={props.closeModal} className="closeBtn">X</button>
                <img src={props.image} className="thumbnail" alt={props.title}/>
            </Modal>
        </div>
    )
}

import React from 'react';
import Modal from 'react-modal'
Modal.setAppElement("#app")

const OptionModal = (props) => (
<Modal 
    isOpen ={!!props.selectedOption}
    contentLabel ="Selected option"
    onRequestClose = {props.handleOptionModal}
    closeTimeoutMS = {200}
    className = "modal"
    >
    <h3 className="modal__title">Selected Option</h3> 
    {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
    <button className="button" onClick = {props.handleOptionModal} >Okay</button>
</Modal>
)


export default OptionModal;
import React from 'react';
import Modal from 'react-modal'
Modal.setAppElement("#app")

const OptionModal = (props) => (
<Modal 
    isOpen ={!!props.selectedOption}
    contentLabel ="Selected option"
    onRequestClose = {props.handleOptionModal}
    >
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick = {props.handleOptionModal} >Okay</button>
</Modal>
)


export default OptionModal;
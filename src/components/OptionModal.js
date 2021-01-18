import React from 'react'
import Modal from 'react-modal'

const optionModal = (props) => (
    <Modal
        ariaHideApp={false}
        isOpen={!!props.selectedOption}
        onRequestClose={props.clear}
        contentLabel="Selected Option"
        closeTimeoutMS={200}
        className="modal"
    >
        <h3>Selected Option</h3>
        {props.selectedOption && <p>{props.selectedOption}</p>}
        <button className="button" onClick={props.clear}>OK</button>
    </Modal>
)

export default optionModal
import React, { useContext} from 'react'
import { Modal, ModalHeader, ModalBody } from 'reactstrap'
import './index.css';
import {AnswersContext} from '../../../../context/tools/leadership/AnswersContexts'

function ModalWrapper({children}) {
    const handleClose = () => {
        setShow(false)
        setResult('')
    }

    const {
        show,
        setShow,
        setResult,
    } = useContext(AnswersContext)

    return (
        <div className="new-modal">
            <Modal isOpen={show} toggle={handleClose} contentClassName="custom-modal-style" fade={false}>
                <ModalHeader toggle={handleClose}></ModalHeader>
                <ModalBody className="modal-body">
                    {children}
                </ModalBody>
            </Modal>
        </div>
    )
}

export default ModalWrapper

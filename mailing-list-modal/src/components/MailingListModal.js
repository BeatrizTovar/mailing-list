import React from 'react'
import { Modal, Button } from 'react-bootstrap'

class MailingListModal extends React.Component {
    constructor(props){
        super(props)
        this.state={
            open: false,
            email: ''
        }
    }

    render() {
        return(
            <React.Fragment>
                <Modal className='modal modal-dialog' show={this.state.open} onHide={this.onClose}>
                <Modal.Header closeButton>
                <Modal.Title>
                    <span>Would you like to join our mailing list?</span>
                </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                        By joining, you would have access to the latest news!
                    </div>
                    <div>
                    <input className='form-control' type='email' name='email' value={this.state.email} placeholder='Enter Email...' onChange={this.valueChange} />
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button className='submit-btn' onClick={this.onClose}>Yes, Count Me In!</Button>
                </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default MailingListModal;
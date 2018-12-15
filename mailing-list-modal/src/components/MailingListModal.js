import React from 'react'
import { Modal, Button } from 'react-bootstrap'
import validator from 'validator'

class MailingListModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            open: false,
            email: '',
            error: false
        }

        this.onClose = this.onClose.bind(this)
        this.valueChange = this.valueChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    componentDidMount() {
        //will open the modal upon page load
        this.setState({
            open: true
        })
    }

    onClose() {
        this.setState({
            open: !this.state.open
        })
    }

    valueChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    onSubmit() {
        //submit form function
    }

    render() {
        return (
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
                        <Button className='submit-btn' onClick={this.onSubmit}>Yes, Count Me In!</Button>
                    </Modal.Footer>
                </Modal>
            </React.Fragment>
        )
    }
}

export default MailingListModal;
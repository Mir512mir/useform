import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Requests from "../../services/requests";


function ModalPost(props) {
    const [formdata, setFormData] = useState('');
    const request = new Requests;

    const onGetData = () => {
        setFormData();
    }

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Change Data
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <label htmlFor="usname"></label>
                    <input placeholder="User Name" type="text" id="usname" />

                    <label htmlFor="avatar"></label>
                    <input placeholder="avatar" type="text" id="avatar" />

                    <label htmlFor="age"></label>
                    <input placeholder="age" type="text" id="age" />

                    <label htmlFor="name"></label>
                    <input placeholder="Full Name" type="text" id="name" />

                    <label htmlFor="bio"></label>
                    <textarea placeholder="Bio" name="bio" id="bio"></textarea>

                    <input type="submit" value='Submit' />
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalPost;
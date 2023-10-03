import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



function OtherUsers({ isOpen, users, onHideHandler }) { //деструктуризация обьекта! 

    return (
        <Modal
            show={isOpen}
            onHide={() => onHideHandler(false)}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Other users
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {users?.length?<ul>
                    {users.map((user)=>{
                        return (
                            <li key={user._id}>{user._id}</li>
                        )
                        
                    } )}
                </ul>:<span>downloading</span>

                }

            </Modal.Body>
            {/* <Modal.Footer>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer> */}
        </Modal>
    )
}

export default OtherUsers;
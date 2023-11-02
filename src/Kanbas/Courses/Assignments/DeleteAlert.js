import {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useDispatch} from "react-redux";
import {deleteAssignment} from "./assignmentsReducer";

export default function DeleteAlert({assignment}) {
    const [show, setShow] = useState(false);
    const dispatch = useDispatch()
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="outline-danger"
                    className={"inline-block"}
                    onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation()
                        handleShow();
                    }}>
                Delete
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this module?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={
                        () => {
                            handleClose()
                        }}>
                        Cancel
                    </Button>
                    <Button variant="primary" onClick={
                        () => {
                            dispatch(deleteAssignment(assignment))
                            handleClose()
                        }}>
                        Ok
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}
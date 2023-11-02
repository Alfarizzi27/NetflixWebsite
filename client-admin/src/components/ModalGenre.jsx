import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

export default function ModalAdd(title) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {title.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Genre</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Genre Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                style={{
                  border: "solid",
                  borderWidth: "0.5px",
                  padding: "8px",
                }}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={handleClose}
            style={{ boxShadow: "0px 0px" }}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

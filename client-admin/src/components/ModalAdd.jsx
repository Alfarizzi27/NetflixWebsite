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
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Film title
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
            <Form.Group className="" controlId="exampleForm.ControlTextarea1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Synopsis
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                style={{
                  border: "solid",
                  borderWidth: "0.5px",
                  padding: "8px",
                }}
              />
            </Form.Group>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Image URL
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
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Rating
              </Form.Label>
              <Form.Control
                type="number"
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

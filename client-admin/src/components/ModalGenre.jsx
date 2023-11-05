import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { addGenresStart } from "../store/actions";
import { useDispatch } from "react-redux";

export default function ModalAdd(title) {
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState("");

  const changeHandler = (e) => {
    const value = e.target.value;

    setName({
      ...name,
      name: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addGenresStart({
        name: name.name,
      })
    );
    setName({
      ...name,
      name: "",
    });
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {title.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Genre</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandler}>
          <Modal.Body>
            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Genre Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Genre Name"
                style={{
                  border: "solid",
                  borderWidth: "0.5px",
                  padding: "8px",
                }}
                name="name"
                onChange={changeHandler}
              />
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={handleClose}
              style={{ boxShadow: "0px 0px" }}
            >
              Close
            </Button>
            <Button variant="primary" type="submit">
              Save Changes
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
}

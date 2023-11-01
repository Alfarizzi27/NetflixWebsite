import { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function Table({ data, columns, index, actions }) {
  const [editAction, deleteAction] = actions;

  const [edit, setEdit] = useState([]);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  async function editDatas(id) {
    try {
      let response = await fetch("http://localhost:3000/movies/" + id);

      if (!response.ok) {
        throw { name: "gagal fetch" };
      }

      response = await response.json();
      setEdit(response);
      handleShow();
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <tr>
        <td scope="row">{index + 1}</td>
        {columns.map((column) =>
          column === "imgUrl" ? (
            <td key={column}>
              <img src={data[column]} style={{ height: "200px" }} />
            </td>
          ) : (
            <td key={column} style={{ whiteSpace: "normal" }}>
              {data[column]}
            </td>
          )
        )}
        <td
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            alignContent: "center",
            height: "217px",
            gap: "10px",
          }}
        >
          {editAction && (
            <i
              onClick={() => {
                editDatas(data.id);
              }}
              className="fa-regular fa-pen-to-square fa-lg"
              style={{ color: "#000000" }}
            ></i>
          )}

          {deleteAction && (
            <i
              className="fa-solid fa-trash fa-lg"
              style={{ color: "#000000" }}
            ></i>
          )}
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
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
                defaultValue={edit.title}
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
                defaultValue={edit.synopsis}
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
                defaultValue={edit.imgUrl}
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

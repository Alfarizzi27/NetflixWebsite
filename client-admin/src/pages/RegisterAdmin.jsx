import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FloatingLabel from "react-bootstrap/esm/FloatingLabel";
import { useDispatch } from "react-redux";
import { addAdminStart } from "../store/actions";
import { useState } from "react";
export default function RegisterAdmin() {
  const dispatch = useDispatch();

  const [admin, setAdmin] = useState({
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    address: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setAdmin({
      ...admin,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addAdminStart({
        username: admin.username,
        email: admin.email,
        password: admin.password,
        phoneNumber: admin.phoneNumber,
        address: admin.address,
      })
    );
  };

  return (
    <>
      <div
        style={{
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        <h4>Register New Admin</h4>
        <h6 style={{ marginBottom: "0px" }}>Personal Information</h6>
        <p style={{ fontWeight: 200, fontSize: "12px", marginBottom: "0px" }}>
          Use a permanent address where you can receive mail
        </p>
        <hr style={{ marginTop: "0px" }} />
      </div>

      <div style={{ display: "flex" }}>
        <Form onSubmit={submitHandler} style={{ width: "100%" }}>
          <Form.Group className="mb-3" controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              style={{
                border: "solid",
                borderWidth: "0.5px",
                padding: "8px",
              }}
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              style={{
                border: "solid",
                borderWidth: "0.5px",
                padding: "8px",
              }}
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              style={{
                border: "solid",
                borderWidth: "0.5px",
                padding: "8px",
              }}
              type="password"
              placeholder="Password"
              autoComplete="on"
              name="password"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPhone">
            <Form.Label>Phone Number</Form.Label>
            <Form.Control
              style={{
                border: "solid",
                borderWidth: "0.5px",
                padding: "8px",
              }}
              type="text"
              placeholder="Enter phone number"
              name="phoneNumber"
              onChange={changeHandler}
            />
          </Form.Group>

          <Form.Label>Address</Form.Label>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Address"
            className="mb-3"
          >
            <Form.Control
              style={{
                border: "solid",
                borderWidth: "0.5px",
                paddingLeft: "8px",
              }}
              as="textarea"
              placeholder="Leave a comment here"
              name="address"
              onChange={changeHandler}
            />
          </FloatingLabel>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}

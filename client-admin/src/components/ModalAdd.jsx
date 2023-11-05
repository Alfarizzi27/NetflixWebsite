import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import { fetchGenresStart, addMovieStart } from "../store/actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function ModalAdd(title) {
  const [show, setShow] = useState(false);
  const genres = useSelector((state) => state.genres.data);
  const dispatch = useDispatch();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    dispatch(fetchGenresStart());
  }, []);

  const [movie, setMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    genreId: "",
    nameCast1: "",
    nameCast2: "",
    nameCast3: "",
    profileCast1: "",
    profileCast2: "",
    profileCast3: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(
      addMovieStart({
        title: movie.title,
        synopsis: movie.synopsis,
        trailerUrl: movie.trailerUrl,
        imgUrl: movie.imgUrl,
        rating: movie.rating,
        genreId: movie.genreId,
        cast: [
          {
            name: movie.nameCast1,
            profilePict: movie.profileCast1,
          },
          {
            name: movie.nameCast2,
            profilePict: movie.profileCast2,
          },
          {
            name: movie.nameCast3,
            profilePict: movie.profileCast3,
          },
        ],
      })
    );
    handleClose();
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        {title.title}
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Movie</Modal.Title>
        </Modal.Header>
        <Form onSubmit={submitHandler}>
          <Modal.Body>
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
                name="title"
                onChange={changeHandler}
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
                name="synopsis"
                onChange={changeHandler}
              />
            </Form.Group>
            <Form.Select
              aria-label="Default select example"
              style={{
                border: "solid",
                borderWidth: "0.5px",
                padding: "8px",
                marginBottom: "5px",
                marginTop: "20px",
              }}
              name="genreId"
              onChange={changeHandler}
            >
              <option>Genres</option>
              {genres.map((genre) => (
                <option key={genre.id} value={genre.id}>
                  {genre.name}
                </option>
              ))}
            </Form.Select>
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
                name="imgUrl"
                onChange={changeHandler}
              />
            </Form.Group>

            <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                Trailer URL
              </Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                style={{
                  border: "solid",
                  borderWidth: "0.5px",
                  padding: "8px",
                }}
                name="trailerUrl"
                onChange={changeHandler}
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
                name="rating"
                onChange={changeHandler}
              />
            </Form.Group>

            {/* INPUT CAST */}

            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="col-4" style={{ paddingRight: "10px" }}>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                    Name Cast
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                    }}
                    name="nameCast1"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    name="nameCast2"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    name="nameCast3"
                    onChange={changeHandler}
                  />
                </Form.Group>
              </div>
              <div className="col-8">
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Label style={{ marginBottom: "5px", marginTop: "5px" }}>
                    Image URL Cast
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                    }}
                    name="profileCast1"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    name="profileCast2"
                    onChange={changeHandler}
                  />
                </Form.Group>
                <Form.Group className="" controlId="exampleForm.ControlInput1">
                  <Form.Control
                    type="text"
                    placeholder=""
                    style={{
                      border: "solid",
                      borderWidth: "0.5px",
                      padding: "8px",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                    name="profileCast3"
                    onChange={changeHandler}
                  />
                </Form.Group>
              </div>
            </div>
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

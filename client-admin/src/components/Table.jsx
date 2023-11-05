import { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchDetailStart,
  deleteStart,
  deleteGenresStart,
  fetchGenresStart,
  editDetailStart,
} from "../store/actions";
import { useNavigate } from "react-router-dom";
import Skeleton from "@mui/material/Skeleton";

export default function Table({ data, columns, index, actions }) {
  const [editAction, deleteAction] = actions;

  const edit = useSelector((state) => state.movies.editData);
  const isLoad = useSelector((state) => state.movies.isLoad);
  const genres = useSelector((state) => state.genres.data);
  const dispatch = useDispatch();

  const [show, setShow] = useState(false);
  // const [isLoad, setLoad] = useState(true);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  // async function editDatas(id) {
  //   try {
  //     await dispatch(fetchDetailStart(id));
  //     handleShow();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  useEffect(() => {
    dispatch(fetchGenresStart());
  }, []);

  useEffect(() => {
    edit;
  }, [edit]);

  const [movie, setMovie] = useState({
    title: "",
    synopsis: "",
    trailerUrl: "",
    imgUrl: "",
    rating: "",
    genreId: "",
  });

  const editDatas = async (id) => {
    await dispatch(fetchDetailStart(id));
    setMovie({
      ...movie,
      title: edit.title,
      synopsis: edit.synopsis,
      trailerUrl: edit.trailerUrl,
      imgUrl: edit.imgUrl,
      rating: edit.rating,
      genreId: edit.genreId,
    });
    handleShow();
  };

  const deleteDatas = (id) => {
    dispatch(deleteStart(id));
  };

  const deleteGenres = (id) => {
    dispatch(deleteGenresStart(id));
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setMovie({
      ...movie,
      [name]: value,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    // dispatch(
    //   await editDetailStart(data.id, {
    //     title: movie.title,
    //     synopsis: movie.synopsis,
    //     trailerUrl: movie.trailerUrl,
    //     imgUrl: movie.imgUrl,
    //     rating: movie.rating,
    //     genreId: movie.genreId,
    //   })
    // );
    // edit.Casts[0] == undefined ? "isi" : "kosong"
  };

  const showCast = () => {
    return edit.Casts.length === 0 ? "isi" : "kosong";
  };

  return (
    <>
      {/* <Skeleton variant="rounded" width={210} height={60} /> */}
      <tr>
        {isLoad === true ? (
          <Skeleton variant="rounded" width={210} height={60} />
        ) : (
          <td scope="row">{index + 1}</td>
        )}

        {columns.map((column) =>
          column === "imgUrl" ? (
            isLoad == true ? (
              <Skeleton variant="rounded" width={210} height={60} />
            ) : (
              <td key={column}>
                <img src={data[column]} style={{ height: "200px" }} />
              </td>
            )
          ) : isLoad == true ? (
            <Skeleton variant="rounded" width={210} height={60} />
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
              onClick={() => editDatas(data.id)}
              className="fa-regular fa-pen-to-square fa-lg"
              style={{ color: "#000000" }}
            ></i>
          )}

          {deleteAction === "deleteMovies" ? (
            <i
              onClick={() => deleteDatas(data.id)}
              className="fa-solid fa-trash fa-lg"
              style={{ color: "#000000" }}
            ></i>
          ) : (
            ""
          )}

          {deleteAction === "deleteGenres" ? (
            <i
              onClick={() => deleteGenres(data.id)}
              className="fa-solid fa-trash fa-lg"
              style={{ color: "#000000" }}
            ></i>
          ) : (
            ""
          )}
        </td>
      </tr>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Movie</Modal.Title>
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
                defaultValue={edit.title}
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
                defaultValue={edit.synopsis}
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
              defaultValue={edit.genreId}
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
                defaultValue={edit.imgUrl}
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
                defaultValue={edit.trailerUrl}
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
                defaultValue={edit.rating}
              />
            </Form.Group>

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
                    disabled
                    defaultValue={() => showCast()}
                    name="nameCast1"
                    onChange={changeHandler}
                  />
                </Form.Group>
                {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                    disabled
                    defaultValue={edit.Casts[1].name}
                    name="nameCast1"
                    onChange={changeHandler}
                  />
                </Form.Group> */}
                {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                    disabled
                    defaultValue={edit.Casts[2].name}
                    name="nameCast1"
                    onChange={changeHandler}
                  />
                </Form.Group> */}
              </div>
              <div className="col-8">
                {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                    disabled
                    defaultValue={edit.Casts[0].profilePict}
                    name="profileCast1"
                    onChange={changeHandler}
                  />
                </Form.Group> */}
                {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                    disabled
                    defaultValue={edit.Casts[1].profilePict}
                    name="profileCast2"
                    onChange={changeHandler}
                  />
                </Form.Group> */}
                {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
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
                    disabled
                    defaultValue={edit.Casts[2].profilePict}
                    name="profileCast3"
                    onChange={changeHandler}
                  />
                </Form.Group> */}
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

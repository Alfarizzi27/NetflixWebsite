import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailStart } from "../store/actions";
import { useNavigate } from "react-router-dom";

export default function CardMovies({ data }) {
  const edit = useSelector((state) => state.movies.editData);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const detailMovie = (id) => {
    dispatch(fetchDetailStart(id));
    navigate("/detail/" + id);
  };
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={data.imgUrl} />
        <Card.Body>
          <Card.Title>{data.title}</Card.Title>
          <Card.Text>{data.synopsis}</Card.Text>
          <Button variant="primary" onClick={() => detailMovie(data.id)}>
            Detail movie
          </Button>
        </Card.Body>
      </Card>
    </>
  );
}

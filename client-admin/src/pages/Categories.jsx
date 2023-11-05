import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../components/Table";
import { fetchGenresStart } from "../store/actions";
import ModalGenre from "../components/ModalGenre";

export default function Categories() {
  const genres = useSelector((state) => state.genres.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresStart());
  }, []);

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "30px",
          marginBottom: "10px",
        }}
      >
        <h4>Genres</h4>
        <ModalGenre title={"Add Genre"} />
      </div>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">CreatedAt</th>
            <th scope="col">UpdatedAt</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => (
            <Table
              data={genre}
              index={index}
              key={genre.id}
              columns={["name", "createdAt", "updatedAt"]}
              actions={[null, "deleteGenres"]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

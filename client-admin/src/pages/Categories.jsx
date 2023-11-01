import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
// import useFetch from "../hooks/useFetch";
import Table from "../components/Table";
import { fetchGenresStart } from "../assets/store/actions";

export default function Categories() {
  // const { datas: genres, errors } = useFetch("genres");

  const genres = useSelector((state) => state.genres.data);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenresStart("genres"));
  }, []);

  return (
    <>
      <h4>Genres</h4>
      <button className="btn btn-primary">Add Product</button>
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
              actions={[null, "delete"]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

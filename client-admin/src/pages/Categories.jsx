import { useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";
import Table from "../components/Table";
export default function Categories() {
  const { datas: genres, errors } = useFetch("genres");
  return (
    <>
      <h4>Genres</h4>
      <button className="btn btn-primary">Add Product</button>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No</th>
            <th scope="col">Name</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {genres.map((genre, index) => (
            <Table
              data={genre}
              index={index}
              key={genre.id}
              columns={["name"]}
            />
          ))}
        </tbody>
      </table>
    </>
  );
}

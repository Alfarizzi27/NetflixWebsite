import { useEffect, useState } from "react";
import Table from "../components/Table";
import useFetch from "../hooks/useFetch";
import ModalAdd from "../components/ModalAdd";

function Home() {
  const { datas: movies, errors } = useFetch("movies");
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
        <h4>Movies List</h4>
        <ModalAdd />
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ padding: "12px 8px" }}>
              No
            </th>
            <th scope="col">Name</th>
            <th scope="col">Slug</th>
            <th scope="col">Rating</th>
            <th scope="col">CreatedBy</th>
            <th scope="col">MainImage</th>
            <th scope="col">Images</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <Table
              key={movie.id}
              data={movie}
              columns={["title", "slug", "rating", "authorId", "imgUrl"]}
              index={index}
            />

            // <tr key={movie.id}>
            //   <Table movie={movie} index={index} />
            // </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Home;

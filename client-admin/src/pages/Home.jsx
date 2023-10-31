import Sidebar from "../components/sidebar";
import Table from "../components/Table";

function Home({ movies }) {
  console.log(movies, "ini dari HOME");
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <Sidebar />
          </div>
          <div
            className="col-9"
            style={{ marginTop: "10px", marginLeft: "-50px" }}
          >
            <h4>Movies List</h4>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">No</th>
                  <th scope="col">Name</th>
                  <th scope="col">Slug</th>
                  <th scope="col">Price</th>
                  <th scope="col">CreatedBy</th>
                  <th scope="col">MainImage</th>
                  <th scope="col">Images</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody>
                {movies.map((movie, index) => (
                  <tr key={movie.id}>
                    <Table movie={movie} index={index} />
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;

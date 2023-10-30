import Sidebar from "../components/sidebar";

function Home() {
  return (
    <>
      <div className="col-3">
        <Sidebar />
      </div>
      <div
        className="col-9"
        style={{
          // display: "flex",
          // flexWrap: "wrap",
          // alignItems: "flex-start",
          // justifyContent: "flex-start",
          height: "100vh",
        }}
      >
        <h1>Movies List</h1>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Home;

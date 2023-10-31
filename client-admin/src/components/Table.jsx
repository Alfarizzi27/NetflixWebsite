export default function Table({ data, columns, index }) {
  return (
    <tr>
      <td scope="row">{index + 1}</td>
      {columns.map((column) =>
        column === "imgUrl" ? (
          <td key={column}>
            <img src={data[column]} style={{ height: "200px" }} />
          </td>
        ) : (
          <td key={column} style={{ whiteSpace: "normal" }}>
            {data[column]}
          </td>
        )
      )}
      <td>
        <a href="">Edit</a> | <a href="">Delete</a>
      </td>
    </tr>
  );
}

export default function Table({ movie, index }) {
  return (
    <>
      <td scope="row">{index + 1}</td>
      <td>{movie.title}</td>
      <td>{movie.slug}</td>
      <td>{movie.rating}</td>
      <td>{movie.rating}</td>
      <td>{movie.imgUrl}</td>
      <td>{movie.rating}</td>
      <td>
        <a href="">Edit</a> | <a href="">Delete</a>
      </td>
    </>
  );
}

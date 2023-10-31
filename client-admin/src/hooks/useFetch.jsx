import { useEffect, useState } from "react";

export default function useFetch(url) {
  const [datas, setDatas] = useState([]);
  const [errors, setErrors] = useState({});
  async function fetchMovies() {
    try {
      let response = await fetch("http://localhost:3000/" + url);

      if (!response.ok) {
        throw { name: "gagal fetch" };
      }

      response = await response.json();
      setDatas(response);
    } catch (error) {
      console.log(error);
      setErrors(error);
    }
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return {
    datas,
    errors,
  };
}

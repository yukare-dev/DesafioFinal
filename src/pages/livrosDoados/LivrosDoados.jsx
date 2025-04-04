import s from "./livrosdoados.module.scss";
import { useEffect, useState } from "react";
import axios from "axios";

export default function LivrosDoados() {
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const response = await axios.get(
      "https://api-desafio-t03s.onrender.com/livros"
    );
    setBooks(response.data);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <section className={s.donatePage}>
      <h2>Livros Doados</h2>
      <section className={s.donateBook}>
        {books.map((item) => (
          <div key={item.id} className={s.booksCard}>
            <img src={item.image} className={s.imgCard} alt="" />
            <h3>{item.titulo}</h3>
            <div>
              <p>{item.autor}</p>
              <p>{item.categoria}</p>
            </div>
          </div>
        ))}
      </section>
    </section>
  );
}

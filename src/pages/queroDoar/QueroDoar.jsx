import logoForm from "../../assets/logoForm.png";
import s from "./queroDoar.module.scss";
import { useState } from "react";
import axios from "axios";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [image_url, setImage_url] = useState("");

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImage_url = (e) => {
    setImage_url(e.target.value);
  };

  const enviarDados = async () => {
    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      image_url,
    };

    await axios.post("https://api-desafio-t03s.onrender.com/doar", dadosEnviar);
  };

  return (
    <section className={s.textForm}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form action="" className={s.styleForm}>
        <div>
          <img src={logoForm} alt="Imagem com ícone de um livro" />
          <h2>Informações do Livro</h2>
        </div>
        <input type="text" placeholder="Título" onChange={capturaTitulo} />
        <input
          type="text"
          placeholder="Categoria"
          onChange={capturaCategoria}
        />
        <input type="text" placeholder="Autor" onChange={capturaAutor} />
        <input
          type="url"
          placeholder="Link da Imagem"
          onChange={capturaImage_url}
        />
        <input
          type="submit"
          value="Doar"
          className={s.buttonDoar}
          onClick={enviarDados}
        />
      </form>
    </section>
  );
}

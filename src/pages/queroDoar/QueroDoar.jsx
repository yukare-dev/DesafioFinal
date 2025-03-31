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
    setTitulo("");
    setCategoria("");
    setAutor("");
    setImage_url("");

    alert("Obrigado, seu livro foi cadastrado com sucesso!");
  };

  return (
    <section className={s.textForm}>
      <p>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </p>
      <form onSubmit={(e) => e.preventDefault()} className={s.styleForm}>
        <div>
          <img src={logoForm} alt="Imagem com ícone de um livro" />
          <h2>Informações do Livro</h2>
        </div>
        <input
          type="text"
          placeholder="Título"
          onChange={capturaTitulo}
          value={titulo}
          required
        />
        <input
          type="text"
          placeholder="Categoria"
          onChange={capturaCategoria}
          value={categoria}
          required
        />
        <input
          type="text"
          placeholder="Autor"
          onChange={capturaAutor}
          value={autor}
          required
        />
        <input
          type="url"
          placeholder="Link da Imagem"
          onChange={capturaImage_url}
          value={image_url}
          required
        />
        <button type="submit" className={s.buttonDoar} onClick={enviarDados}>
          Doar
        </button>
      </form>
    </section>
  );
}

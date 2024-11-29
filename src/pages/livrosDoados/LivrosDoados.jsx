import livroOProtagonista from '../../assets/livroOProtagonista.png'
import s from './livrosdoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.donatePage}>
            <h2>Livros Doados</h2>
            <section className={s.donateBook}>
                <div className={s.books}>
                <img src={livroOProtagonista} alt="Imagem da capa do livro O Protagonista" />
                <h3>O protagonista</h3>
                <div>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
                </div>
                </div>
            </section>
        </section>
    )
}
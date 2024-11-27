import livroOProtagonista from '../../assets/livroOProtagonista.png'
import s from './livrosdoados.module.scss'

export default function LivrosDoados(){
    return(
        <section className={s.donatePage}>
            <h2>Livros Doados</h2>
            <div className={s.donate}>
                <img src={livroOProtagonista} alt="Imagem da capa do livro O Protagonista" />
                <p>O protagonista</p>
                <p>Susanne Andrade</p>
                <p>Ficção</p>
            </div>
        </section>
    )
}
import logoForm from '../../assets/logoForm.png'
import s from './queroDoar.module.scss'

export default function QueroDoar(){
    return(
        <section className={s.textForm}>
            <p>Por favor, preencha o formulário com suas informações e as informações do Livro</p>
            <form action="" className={s.styleForm}>
                <div>
                    <img src={logoForm} alt="Imagem com ícone de um livro" />
                    <h2>Informações do Livro</h2>
                </div>
                <input type="text" placeholder='Título'/>
                <input type="text" placeholder='Categoria'/>
                <input type="text" placeholder='Autor'/>
                <input type="text" placeholder='Link da Imagem'/>
                <button type='submit' value='Doar'>Doar</button>
            </form>
        </section>
    )
}
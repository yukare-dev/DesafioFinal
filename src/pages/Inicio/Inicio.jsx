import s from './inicio.module.scss'
import community from '../../assets/community.png'
import reading from '../../assets/reading.png'
import transform from '../../assets/transform.png'
import balance from '../../assets/balance.png'

export default function Inicio(){
    return(
        <main>
            <section className={s.primeiraSessaoInicio}>
                <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
            </section>
            <section className={s.segundaSessaoInicio}>
                <h2>Por que devo doar?</h2>
                <article className={s.caixas}>
                    <figure>
                    <img src={community} alt="Imagem ilustrativa de uma comunidade" />
                    <figcaption> Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</figcaption>
                    </figure>
                    <figure>
                    <img src={reading} alt="Imagem ilustrativa que representa a leitura e aprendizado" />
                    <figcaption>Estimula o hábito da leitura e o aprendizado contínuo.</figcaption>
                    </figure>
                    <figure>
                    <img src={transform} alt="Imagem ilustrativa que representa conhecimento e transformação" />
                    <figcaption>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</figcaption>
                    </figure>
                    <figure>
                    <img src={balance} alt="Imagem ilustrativa de uma balança" />
                    <figcaption>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</figcaption>
                    </figure>
                </article>
            </section>
        </main>
    )
}
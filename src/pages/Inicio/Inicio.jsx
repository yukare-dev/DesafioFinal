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
            <section className={s.porqueDoarInicio}>
                <h2>Por que devo doar?</h2>
            <section className={s.cards}>
                    <div>
                        <img src={community} alt="Imagem ilustrativa de uma comunidade" />
                        <p>Oferece livros a quem não tem acesso, ajudando a reduzir a exclusão social.</p>
                    </div>
                    <div>
                        <img src={reading} alt="Imagem ilustrativa que representa a leitura e aprendizado" />
                        <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
                    </div>
                    <div>
                        <img src={transform} alt="Imagem ilustrativa que representa conhecimento e transformação" />
                        <p>Fornece conhecimento e inspiração, permitindo que indivíduos transformem suas vidas.</p>
                    </div>
                    <div>
                        <img src={balance} alt="Imagem ilustrativa de uma balança" />
                        <p>Garante que todos, independentemente de sua condição, tenham oportunidades de aprendizado.</p>
                    </div>
            </section>
            </section>
        </main>
    )
}
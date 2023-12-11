import styles from './Sobre.module.css'
import avatar from './images/mari_ana.png'
import html from './images/icon-html.svg'
import css from './images/icon-css.svg'
import js from './images/icon-js.svg'
import node from './images/icon-node.svg'
import react from './images/icon-react.svg'
import sql from './images/icon-sql.svg'

function Sobre() {
    return (
        <section className={styles.sobre}>

            <div className={styles.bio}>
                <img src={avatar} alt="Foto do rosto da Mariana" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>

                    <p>Sou a <span>Mari </span><br />
                    <strong>Dev Full Stack</strong></p>

                    <p>Trabalho com desenvolvimento Web.</p>

                    <p>Sou apaixonada por transformar ideias em realidade digital.</p>

                    <p>Especializada em criação de aplicações dinâmicas e intuitivas, <br /> com foco na experiência do usuário.</p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                <img src={html} alt="Ícone do HTML" />
                <img src={css} alt="Ícone do CSS" />
                <img src={js} alt="Ícone do JavaScript" />
                <img src={react} alt="Ícone do React" />
                <img src={node} alt="Ícone do Node.js" />
                <img src={sql} alt="Ícone do SQL" />
                </div>
            </div>

        </section>
    )
}

export default Sobre
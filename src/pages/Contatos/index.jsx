import styles from './Contatos.module.css'
import { GoMail } from "react-icons/go";
import { BsInstagram, BsYoutube, BsGithub, BsLinkedin,  BsWhatsapp  } from "react-icons/bs";

function Contatos() {
    return (
        <> 
            <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>

            {/* <a href="mailto:marislaradev@outlook.com" target="_blank" rel='noopenner norefferer'>
                <GoMail className={styles.icone} />
            </a> */}

            {/* <a href="#" target="_blank" rel='noopenner norefferer'>
                <BsInstagram className={styles.icone} />
            </a> */}

            {/* <a href="#" target="_blank" rel='noopenner norefferer'>
                <BsYoutube className={styles.icone} />
            </a> */}

            <a href="https://github.com/marislaradev" target="_blank" rel='noopenner norefferer'>
                <BsGithub className={styles.icone} />
            </a>

            <a href="https://www.linkedin.com/in/mariana-da-silva-lara/" target="_blank" rel='noopenner norefferer'>
                <BsLinkedin className={styles.icone} />
            </a>

            {/* <a href="#" target="_blank" rel='noopenner norefferer'>
                <BsWhatsapp className={styles.icone} />
            </a> */}

            </div>
            </section>
        </>
    )
}

export default Contatos
import styles from "./Contatos.module.css";
import { GoMail } from "react-icons/go";
import {
  BsInstagram,
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsWhatsapp,
} from "react-icons/bs";

function Contatos() {
  return (
    <>
      <section className={styles.contatos}>
        <h2>Contatos</h2>

        <h3>Entre em contato comigo</h3>
        <div className={styles.icones}>
          <a
            href="https://github.com/marislaradev"
            target="_blank"
            rel="noopenner norefferer"
          >
            <BsGithub className={styles.icone} />
          </a>

          <a
            href="https://www.linkedin.com/in/mariana-da-silva-lara/"
            target="_blank"
            rel="noopenner norefferer"
          >
            <BsLinkedin className={styles.icone} />
          </a>

          <a
            href="https://wa.me/554591414654"
            target="_blank"
            rel="noopenner norefferer"
          >
            <BsWhatsapp className={styles.icone} />
          </a>
        </div>
        <figure>
          <img
            className={styles.img_contatos}
            src="/personal-information.svg"
            alt="Imagem de contatos"
          ></img>
        </figure>
      </section>
    </>
  );
}

export default Contatos;

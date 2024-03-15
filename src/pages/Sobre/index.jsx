import styles from "./Sobre.module.css";
import avatar from "./images/mari.png";
import html from "./images/icon-html.svg";
import css from "./images/icon-css.svg";
import js from "./images/icon-js.svg";
import node from "./images/icon-node.svg";
import react from "./images/icon-react.svg";
import sql from "./images/icon-sql.svg";
import express from "./images/icon-express.svg";
import tailwind from "./images/icon-tailwind.svg";
import redux from "./images/icon-redux.svg";

function Sobre() {
  return (
    <section className={styles.sobre}>
      <div className={styles.bio}>
        <img src={avatar} alt="Foto da Mariana" className={styles.avatar} />
        <div className={styles.textos}>
          <h2>Sobre</h2>
            <p>Estudante de Licenciatura em Computação pela UTFPR. </p>
            <p>Trabalho com desenvolvimento Web.</p>
            <p>Sou apaixonada por transformar ideias em realidade digital.</p>
            <p>Especializada em criação de aplicações dinâmicas e intuitivas, com
            foco na experiência do usuário.</p>
        </div>
      </div>
      <div className={styles.techs}>
        <h3>Techs</h3>
        <div className={styles.icones}>
          <img className={styles.icone} src={html} alt="Ícone do HTML" />
          <img className={styles.icone} src={css} alt="Ícone do CSS" />
          <img className={styles.icone} src={js} alt="Ícone do JavaScript" />
          <img className={styles.icone} src={react} alt="Ícone do React" />
          <img className={styles.icone} src={node} alt="Ícone do Node.js" />
          <img className={styles.icone} src={sql} alt="Ícone do SQL" />
          <img className={styles.icone} src={express} alt="Ícone do Express" />
          <img className={styles.icone} src={tailwind} alt="Ícone do Tailwind" />
          <img className={styles.icone} src={redux} alt="Ícone do Redux" />
        </div>
      </div>
    </section>
  );
}

export default Sobre;

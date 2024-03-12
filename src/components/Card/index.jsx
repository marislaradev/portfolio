import styles from "./Card.module.css";
import { BsArrowRight } from "react-icons/bs";

function Card({ name, description, html_url, stackIcons }) {
  return (
    <section className={styles.card}>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className={styles.card_footer}>
        <div className={styles.icon_container}>
          {stackIcons && stackIcons.map((icon, index) => (
            <div key={index} className={styles.icon}>
              {icon}
            </div>
          ))}
        </div>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.botao}
        >
          <BsArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Card;


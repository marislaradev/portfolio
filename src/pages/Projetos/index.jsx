import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from "./Projetos.module.css";
import { FaHtml5, FaJs, FaReact, FaCss3Alt } from "react-icons/fa";

function Projetos() {
  const [repositories, setRepositories] = useState([]);

  useEffect(() => {
    const buscarRepositorios = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/marislaradev/repos?page=1&per_page=50"
        );
        const data = await response.json();
        
        const reposWithLanguages = await Promise.all(data.map(async (repo) => {
          const langResponse = await fetch(repo.languages_url);
          const langData = await langResponse.json();
          return {
            ...repo,
            languages: langData
          };
        }));

        setRepositories(reposWithLanguages);
      } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
      }
    };
    buscarRepositorios();
  }, []);

  const getStackIcons = (languages) => {
    const stackIcons = [];

    if (languages && languages.HTML) stackIcons.push(<FaHtml5 key="html" />);
    if (languages && languages.CSS) stackIcons.push(<FaCss3Alt key="css" />);
    if (languages && languages.JavaScript) stackIcons.push(<FaJs key="js" />);
    if (languages && languages.React) stackIcons.push(<FaReact key="react" />);

    return stackIcons;
  };

  return (
    <section className={styles.projetos}>
      <h2>Projetos</h2>
      {repositories.length > 0 ? (
        <section className={styles.lista}>
          {repositories.map((repo) => (
            <Card
              key={repo.id}
              name={repo.name}
              description={repo.description}
              html_url={repo.html_url}
              stackIcons={getStackIcons(repo.languages)}
            />
          ))}
        </section>
      ) : (
        <p>Carregando repositórios...</p>
      )}
    </section>
  );
}

export default Projetos;


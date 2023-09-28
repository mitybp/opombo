import Header from "../../components/Header";
import { Button, Container } from "../../styled";

const Equipe = () => {
  document.title = "Equipe - O Pombo";
  return (
    <main>
      <Header />
      <Container>
        <h1>Equipe</h1>
        <details>
            <summary>Redação</summary>
            <ul>
                <li>Dimitri Barcelos Pusch</li>
                <li>Kauê henrique</li>
                <li>Giullia Dancini</li>
            </ul>
        </details>
        <details>
            <summary>Edição</summary>
            <ul>
                <li>Maria Luiza Montoya</li>
                <li>Dimitri Barcelos Pusch</li>
                <li>Júlia Arana</li>
            </ul>
        </details>
        <details>
            <summary>Reportagem</summary>
            <ul>
                <li>Alice Zelik</li>
                <li>Pedro Said</li>
            </ul>
        </details>
        <details>
            <summary>Divulgação</summary>
            <ul>
                <li>Sophia Sabadim</li>
                <li>Dimitri Barcelos Pusch</li>
            </ul>
        </details>
        <details>
            <summary>Fotojornalismo</summary>
            <ul>
                <li>Laura Meyer</li>
                <li>Isabelle Cristina</li>
            </ul>
        </details>
        <details>
            <summary>Entretenimento</summary>
            <ul>
                <li>Francisco Soarez</li>
                <li>Miguel Henrique</li>
                <li>Pedro Said</li>
                <li>Luiz Pedro</li>
            </ul>
        </details>
      </Container>
    </main>
  );
};

export default Equipe;
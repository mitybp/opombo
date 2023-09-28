import Header from "../../components/Header";
import { Button, Container } from "../../styled";

const Interclasse = () => {
  document.title = "Interclasse - O Pombo";
  return (
    <main>
      <Header />
      <Container>
        <h1>Interclasse</h1>
        <table>
          <thead>
            <tr>
              <th>Equipes</th>
              <th>Data</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Equipe 1 x Equipe 4</td>
              <td>15/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 7 x Equipe 5</td>
              <td>16/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 10 x Equipe 3</td>
              <td>18/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 4 x Equipe 8</td>
              <td>21/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 3 x Equipe 2</td>
              <td>22/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 6 x Equipe 9</td>
              <td>23/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 9 x Equipe 3</td>
              <td>05/09/2023</td>
            </tr>
            <tr>
              <td>Equipe 10 x Equipe 3</td>
              <td>25/08/2023</td>
            </tr>
            <tr>
              <td>Equipe 7 x Equipe 4</td>
              <td>26/09/2023</td>
            </tr>
            <tr>
              <td>Equipe 2 x Equipe 6</td>
              <td>27/09/2023</td>
            </tr>
            <tr>
              <td>Equipe 1 x Equipe 4</td>
              <td>29/09/2023</td>
            </tr>
            <tr>
              <td>Equipe 10 x Equipe 6</td>
              <td>02/10/2023</td>
            </tr>
          </tbody>
        </table>
        <h3>Equipe 1</h3>
        <ul>
          <li>Caetano 8°B</li>
          <li>Rafael 8°A</li>
          <li>Fran 9°A</li>
          <li>Vini 9°A</li>
          <li>Lorenzo 8°C</li>
        </ul>
        <h3>Equipe 2</h3>
        <ul>
          <li>Pedro 7°A</li>
          <li>Raul 9°A</li>
          <li>Gabriel 9°A</li>
          <li>Felipe 8°A</li>
          <li>Gabi 9°C</li>
        </ul>
        <h3>Equipe 3</h3>
        <ul>
          <li>Vitor 6°A</li>
          <li>Thomas 8°A</li>
          <li>Pedro 8°B</li>
          <li>Murilo 9°A</li>
          <li>Francisco</li>
        </ul>
        <h3>Equipe 4</h3>
        <ul>
          <li>Helena 8°C</li>
          <li>Noah 8°A</li>
          <li>Otto 8°A</li>
          <li>Luis Pedro 9°B</li>
          <li>Nicolas 8°A</li>
          <li>Pedro 9°B</li>
        </ul>
        <h3>Equipe 5</h3>
        <ul>
          <li>Miguel 8°C</li>
          <li>Luca 7°A</li>
          <li>Miguel 8°A</li>
          <li>Oliver 8°C</li>
          <li>Davi 8°A</li>
        </ul>
        <h3>Equipe 6</h3>
        <ul>
          <li>JV 9°A</li>
          <li>Bertoli 9°A</li>
          <li>Gabi 8°C</li>
          <li>Joaquim 7°A</li>
          <li>Fran 8°A</li>
        </ul>
        <h3>Equipe 7</h3>
        <ul>
          <li>Augusto 8°A</li>
          <li>Pedro 8°A</li>
          <li>Enrico 8°C</li>
          <li>Luis 8°B</li>
          <li>Nicolas 9°A</li>
        </ul>
        <h3>Equipe 8</h3>
        <ul>
          <li>Barion 9°A</li>
          <li>Vinicius B 7°A</li>
          <li>Matheus MB 8°A</li>
          <li>João Gui 8°C</li>
          <li>Kaleb 6°A</li>
        </ul>
        <h3>Equipe 9</h3>
        <ul>
          <li>Otto 7°A</li>
          <li>Leonardo 6°A</li>
          <li>Lucas MB 6°A</li>
          <li>Felipe K 8°B</li>
          <li>Cecília 6°A</li>
        </ul>
        <h3>Equipe 10</h3>
        <ul>
          <li>Pedro Fabro 9°A</li>
          <li>Suarez 9°B</li>
          <li>Eleonora 6°A</li>
          <li>Tiago 6°A</li>
          <li>Murilo 6°A</li>
          <li>Helo 6°A</li>
        </ul>
      </Container>
    </main>
  );
};

export default Interclasse;

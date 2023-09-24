import { useContext } from "react";
import { ApiContext } from "../../context";

import { Button } from "../Button/Button";

import divsorDesktop from "../../../images/pattern-divider-desktop.svg";
import "./Card.css";

const Card = () => {
  const { data, geraNumeroAleatorio } = useContext(ApiContext);
  return (
    <section className="card">
      <h1>Advice # {data.id}</h1>
      <p> {data.advice} </p>
      <img
        className="card-img"
        src={divsorDesktop}
        alt="imagem que divide o texto e o botão"
      />
      <div className="card-btn">
        <Button onClick={() => geraNumeroAleatorio()} />
      </div>
    </section>
  );
};

export default Card;

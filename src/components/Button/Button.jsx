/* eslint-disable react/prop-types */
import "./Button.css";
import btnImagem from "../../../images/icon-dice.svg";
export const Button = ({ onClick }) => {
  return (
    <button className="btn-submit" onClick={onClick}>
     <img className="btn-imagem" src={btnImagem} alt="imagem do buttao"/>
    </button>
  );
};

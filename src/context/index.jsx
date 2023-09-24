/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";
import api from "../services/api";

export const ApiContext = createContext();

export const ApiContextProvider = ({children}) =>{
    const [data, setData] = useState("");
    const [adviceId, setAdviceId] = useState(1);

    const geraNumeroAleatorio = () => {
        let numero_aleatorio = Math.random();
        numero_aleatorio = Math.floor(numero_aleatorio * 224);
        setAdviceId(numero_aleatorio);
      };

      useEffect(() => {
        api
          .get(`/${adviceId}`)
          .then((response) => setData(response.data.slip))
          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, [adviceId]);
    return(
        <ApiContext.Provider value={{data, geraNumeroAleatorio}}>
            {children}
        </ApiContext.Provider>
    )
}  
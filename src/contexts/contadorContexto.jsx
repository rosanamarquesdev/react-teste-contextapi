// vai melhorar o codigo do ContadorNormal usando o context
import { createContext, useState } from "react";

export const ContadorContexto = createContext();

export const ContadorContextoProvider = ({ children }) => {

    const [contando, setContando] = useState(0);

    return (
        <ContadoContexto.Provider value={{contando, setContando}}>
            {children}
        </ContadoContexto.Provider>
    );

}
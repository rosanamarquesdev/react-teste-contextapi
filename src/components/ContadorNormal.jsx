import '../styles/global.css'

// para usar o state precisa importar
import { useState } from 'react';

export default function Contador(){

    const [contando, setContando] = useState(0);

    // funcao que vai incrementar toda vida que apertar la no buttton
    function incrementar(){
        setContando(contando + 2);
    }

    return(
         <div>
            <h2> { contando } </h2>
            <button type="button" onClick={incrementar}>
                Adicionar
            </button>
         </div>
    )
}
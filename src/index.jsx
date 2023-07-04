import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

// para usar o contexto dentro de todos os elementos disponiveis na aplicacao
// envolva o app com o provider importando o contexto que vai usar
// import TemaContext from './contexts/temaContexto'

import App from './App';
import { ContadorContextoProvider } from './contexts/contadorContexto';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <ContadorContextoProvider>
        <App />
      </ContadorContextoProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

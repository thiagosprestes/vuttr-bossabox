import React from 'react';

// Importação do componente de página inicial
import Home from './pages/Home';

// Importação da estilização global da aplicação
import GlobalStyle from './styles/global';

function App() {
    return (
        <>
            <Home />
            <GlobalStyle />
        </>
    );
}

export default App;

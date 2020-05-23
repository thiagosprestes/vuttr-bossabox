import React from 'react';

import { Provider } from 'react-redux';

import store from './store';

// Importação do componente de página inicial
import Home from './pages/Home';

// Importação da estilização global da aplicação
import GlobalStyle from './styles/global';

function App() {
    return (
        <Provider store={store}>
            <Home />
            <GlobalStyle />
        </Provider>
    );
}

export default App;

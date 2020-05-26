import { createStore } from 'redux';

// Importação do reducer raiz que combina todos os reducers
import rootReducer from './modules/rootReducer';

const store = createStore(rootReducer);

export default store;

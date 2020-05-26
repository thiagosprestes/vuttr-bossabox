import { combineReducers } from 'redux';

// Importação dos reducers da aplicação
import tools from './tools/reducer';
import filter from './filter/reducer';

// Combinando os reducers da aplicação
export default combineReducers({ tools, filter });

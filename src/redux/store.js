import {createStore} from 'redux';
import root_reducer from './root_reducer';


const store = createStore(root_reducer); 

export default store;
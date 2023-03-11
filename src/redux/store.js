// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import root_reducer from './root_reducer';


const store = configureStore({reducer:root_reducer}); 

export default store;
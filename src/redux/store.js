// import {createStore} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import root_reducer from './root_reducer';
import productSaga from './productSaga';
import createSagaMiddleware from '@redux-saga/core';


const sagaMiddleware = createSagaMiddleware();


const store = configureStore({
    reducer:root_reducer,
    middleware: () => [sagaMiddleware]
}); 

sagaMiddleware.run(productSaga)

export default store;
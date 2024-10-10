import{configureStore}  from '@reduxjs/toolkit';
import registrationData from '../slice/registration';
import createSagaMiddleware from "@redux-saga/core";
import { rootSaga } from '../saga';
import accountData from '../slice/user';
import av from '../slice/tutorials';
import comments from '../slice/comments';

const sagaMiddleware = createSagaMiddleware();
const store = configureStore({

    reducer: {

        registration : registrationData,
        account: accountData,
        tutorials: av,
        comments:comments

    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
});

sagaMiddleware.run(rootSaga);
export default store; 
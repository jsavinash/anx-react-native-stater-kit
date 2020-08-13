import {configureStore} from '@reduxjs/toolkit';
import reducer from './reducer';
import middleware, {epicMiddleware} from './middleware';
import rootEpic from './epic';
// tslint-disable-next-line no-underscore-dangle

const store = configureStore({
  reducer,
  middleware,
});

epicMiddleware.run(rootEpic);

export default store;

import store from './customStore';
import * as actions from './action';

store.subscribe(() => {
  console.log('Store changed ' + store.getState());
});

store.dispatch(actions.bugAdded('Bug 404'));
console.log(store.getState());

import {createStore, bindActionCreators} from 'redux';
import reducer from './reducer'
import {inc, dec, rnd} from './actions'



const store = createStore(reducer);
const {dispatch} = store;

//Redux предусмотрел и это в нём есть
// const bindActionCreator = (creator, dispatch) => (...args) =>{
//   dispatch(creator(...args));
// }

const incDispatch = bindActionCreators(
  {incDispatch: inc,
  decDispatch: dec,
  rndDispatch: rnd}
  , dispatch)
// const decDispatch = bindActionCreators(dec, dispatch)
// const rndDispatch = bindActionCreators(rnd, dispatch);

document.getElementById('inc').addEventListener('click', incDispatch);
document.getElementById('dec').addEventListener('click', decDispatch);
document.getElementById('rnd').addEventListener('click', () => {
  const value = Math.floor(Math.random() * 10);
  rndDispatch(value);
})

const update = () => {
  document.getElementById('counter').textContent = store.getState();
}
store.subscribe(update);

// console.log(store.getState());

// store.dispatch({type: 'INC'})
// console.log(store.getState());

// store.subscribe(() => {

// })
// let state = reducer(undefined, {});
// state = reducer(state, {type: 'INC'});
// console.log(state);
// state = reducer(state, {type: 'INC'});
// console.log(state);


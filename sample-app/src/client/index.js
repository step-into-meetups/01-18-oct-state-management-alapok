import { createStore } from 'redux';
import { reducer } from './reducer';
import { Game } from './game';


// Initializing the store with the reducer we created
const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

document.addEventListener('DOMContentLoaded', () => {
  const ui = document.querySelector('#tic-tac');
  const game = new Game({ui, store});
  game.newGame();
});
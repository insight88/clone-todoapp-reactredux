import { createStore } from 'redux';

const add = document.getElementById('add');
const minus = document.getElementById('minus');
const number = document.querySelector('span');

number.innerText = 0;

const ADD = 'ADD';
const MINUS = 'MINUS';

const countModifier = (count = 0, action) => {
  switch (action.type) {
    case ADD:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
};
// * const modifier = (state, action) 2개의 인자를 받음
// * only modifier 한 개의 함수만 data를 modify할 수 있음
// * modifier가 리턴하는 값은 application의 data이므로 getState()로 얻을 수 있음

const countStore = createStore(countModifier);
// * createStore 함수는 data modifier 함수를 인자로 받아야함
// * countStore 함수는 dispatch, getState, replaceReducer, subscribe 메소드를 가짐

const onChange = () => {
  number.innerText = countStore.getState();
};

countStore.subscribe(onChange);
// * subscribe는 store안에 있는 변화들을 listening 주시한다

const handleAdd = () => {
  countStore.dispatch({ type: ADD });
};

const handleMinus = () => {
  countStore.dispatch({ type: MINUS });
};
// * modifier 함수의 인자로 제공되는 action을 정의하는 함수 dispatch
// * dispatch 메소드는 인자로 객체를 받아야 함
// * aciton이 인자로 갖는 객체의 property는 type이라는 이름이어야만 함
add.addEventListener('click', handleAdd);
minus.addEventListener('click', handleMinus);

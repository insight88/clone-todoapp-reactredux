import { createAction, createReducer, configureStore } from '@reduxjs/toolkit';

const addToDo = createAction('ADD');
const deleteToDo = createAction('DELETE');
// * "ADD"라는 type을 가진 action을 생성
// * action은 기본적으로 아래와 같은 포맷을 갖고 있는 오브젝트
// * {
// *   type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
// *   payload: "액션의 실행에 필요한 임의의 데이터",
// * }

const reducer = createReducer([], {
  [addToDo]: (state, action) => {
    state.push({ text: action.payload, id: Date.now() });
  },
  [deleteToDo]: (state, action) =>
    state.filter((toDo) => toDo.id !== action.payload),
});
// * createReducer는 push와 같이 state를 mutate하더라도 new state를 return해준다.
// * filter와 같이 new state를 return 하던지, push와 같이 state를 mutate하던지 상관없다.

const store = configureStore({ reducer });

export const actionCreators = {
  addToDo,
  deleteToDo,
};

export default store;

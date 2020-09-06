import { createStore } from 'redux';

const ADD = 'ADD';
const DELETE = 'DELETE';

const addToDo = (text) => {
  return {
    type: ADD,
    text,
  };
};

const deleteToDo = (id) => {
  return {
    type: DELETE,
    id: parseInt(id),
  };
};

const reducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [{ text: action.text, id: Date.now() }, ...state];
    case DELETE:
      return state.filter((toDo) => toDo.id !== action.id);
    default:
      return state;
  }
};
// * reducer는 old state, action을 인자로 받아 new state를 return

const store = createStore(reducer);
// * 상태는 기본적으로 전부 store에서 집중관리, 커다란 JSON의 결정체
// * 규모가 클 경우 상태를 카테고리별로 분류하여 사용

export const actionCreators = {
  addToDo,
  deleteToDo,
};
// * store에 존재하는 state는 action을 통해서만 접근하여 수정가능
// * action은 기본적으로 아래와 같은 포맷을 갖고 있는 오브젝트
// * {
// *   type: "액션의 종류를 한번에 식별할 수 있는 문자열 혹은 심볼",
// *   payload: "액션의 실행에 필요한 임의의 데이터",
// * }

export default store;

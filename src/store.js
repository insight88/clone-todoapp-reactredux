import { configureStore, createSlice } from '@reduxjs/toolkit';

const toDos = createSlice({
  name: 'toDosReducer',
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});
// * createSlice로 생성된 객체는 name, reducers, actions를 갖고 있다

export const { add, remove } = toDos.actions;

export default configureStore({ reducer: toDos.reducer });

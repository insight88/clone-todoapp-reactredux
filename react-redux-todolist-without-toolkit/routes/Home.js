import React, { useState } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import ToDo from '../components/ToDo';

function Home({ toDos, addToDo }) {
  const [text, setText] = useState('');
  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    addToDo(text);
    setText('');
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
}

function mapStateToProps(state) {
  return { toDos: state };
}
// ? mapStateToProps(state, ownProps?)
// * new State를 props에 전달한다
// * mapStateToProps 함수는 state를 받는다
// * props는 객체여야 한다

function mapDispatchToProps(dispatch) {
  return {
    addToDo: (text) => dispatch(actionCreators.addToDo(text)),
  };
}
// * store의 reducer가 state를 변화시키는 action을 감지하여 dispatch로 new State를 prop에 전달한다

export default connect(mapStateToProps, mapDispatchToProps)(Home);
// * React Component 자체는 Redux flow와 별개이므로 connect를 통해 연결
// * connect는 store로부터 state를 받아 Home component에 전달

import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, signIn } from './actions';

function App() {
  // useSelector でstateの中から使用するstateを抽出している
  // dispatch でACTION CREATERを実行して、ACTIONをREDUCERに渡している(トリガー)
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      <div>
        {isLogged ?
          <h3>Valuable Infomation I can see when I'm logged in.</h3>
          : <button onClick={() => dispatch(signIn())}>Sign In</button>
        }
      </div>
    </div>
  );
}

export default App;

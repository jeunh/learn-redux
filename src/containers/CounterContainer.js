import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { increase, decrease, setDiff } from '../modules/counter';
import Counter from "../components/Counter";

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state 값은 store.getState() 함수를 호출했을 때 나타나는 결과물과 동일
  // const {number, diff} = useSelector(state => ({
  //   number: state.counter.number,
  //   diff: state.counter.diff
  // }));

  // useSelector 최적화
  const number = useSelector(state => state.counter.number );
  const diff = useSelector(state => state.counter.diff );

  // useDispatch는 리덕스 스토어의 dispatch를 함수에서 사용할 수 있게 해주는 Hook
  const dispatch = useDispatch();
  // 각 액션들을 디스패치하는 함수
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
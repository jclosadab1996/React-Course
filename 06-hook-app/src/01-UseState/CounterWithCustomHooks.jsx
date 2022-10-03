import { useCounter } from "../hooks/useCounter";
export const CounterWithCustomHooks = () => {
  const { counter, increment, decrement, reset } = useCounter();

  return (
    <>
      <h1>Counter with Hook: {counter}</h1>
      <hr />

      <button onClick={() => increment(1)} className="btn btn-primary">
        +1
      </button>
      <button onClick={reset} className="btn btn-primary">
        Reset
      </button>
      <button onClick={() => decrement(1)} className="btn btn-primary">
        -1
      </button>
    </>
  );
};

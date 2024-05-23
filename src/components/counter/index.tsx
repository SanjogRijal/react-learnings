import useCounterHook from "../../hooks/useCounterHook";

export default function CounterComponent() {
    const {counter, increment, decrement, reset} = useCounterHook();

    return (
        <>
        -------------------------------------
        <h1>COUNTER HOOK:</h1>
        <h1>{counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
        </>
    )
}
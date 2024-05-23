import { useState } from "react"

const useCounterHook = ()=> {
    let [counter, setCounter] = useState(0);

    const increment = () => {
        setCounter(++counter);
    }

    const decrement = () => {
        if(counter > 0) {
            setCounter(--counter);
        }
    }

    const reset = () => {
        setCounter(0)
    }
    return {counter, increment, decrement, reset}
}

export default useCounterHook;
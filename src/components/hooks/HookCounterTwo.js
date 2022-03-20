import React, {useState} from 'react'

function HookCounterTwo() {
    const initValue = 0;
    const [count, setCount] = useState(initValue)

    // arrow function
    const incrementFive = () => {
        setCount(prevCount => prevCount + 5)
    }

  return (
    <div>
        <div>Count : {count}</div>
        <button onClick={() => setCount(initValue)}>Reset</button>
        <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button>
        <button onClick={() => count > 0 ? setCount(count - 1) : null}>Decrement</button>
        <button onClick={incrementFive}>Increment Five</button>
    </div>
  )
}

export default HookCounterTwo

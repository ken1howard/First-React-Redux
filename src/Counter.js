import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './ducks/counterSlice'

export default function Counter() {
    const count = useSelector((state) => state.value)
    const dispatch = useDispatch()
    const [input, setInput] = useAt

    const byAmountSubmit = (e) => {
        e.preventDefault()
        dispatch(incrementByAmount(Number(input)))
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
            <form onSubmit={(e) => byAmountSubmit(e)}>
                <input type="number" onChange={(e) => setIn} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}
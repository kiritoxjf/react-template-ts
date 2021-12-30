import React from "react"
import { useAppDispatch, useAppSelector } from "../../redux/store"
import { decrement, increment, getValue } from "../../redux/slices/demoSlice"

function Demo() {
  const count = useAppSelector(getValue)
  const dispatch = useAppDispatch()

  return(
    <div className="Demo">
      <h2>这是Demo页面</h2>
      <h3>{count}</h3>
      <button onClick={() => dispatch(increment())}>+1</button>
      <button onClick={() => dispatch(decrement())}>-1</button>
    </div>
  )
}

export default Demo
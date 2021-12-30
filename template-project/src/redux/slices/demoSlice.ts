import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

// State值的类型检查
export interface DemoState {
  value: number
}
// State值的初始化
const initialState: DemoState = {
  value: 0
}
// Slice主体
export const demoSlice = createSlice({
  name: 'demo',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    }
  }
})
// 暴露Slice中的Action
export const { increment, decrement, incrementByAmount } = demoSlice.actions
// 获取State值的方法
export const getValue = (state: RootState) => state.demo.value

export default demoSlice.reducer
import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import demoReducer from './slices/demoSlice'

// 使用configureStore初始化store，在reducer中引入所有Slice中的Reducer
export const store = configureStore({
  reducer: {
    demo: demoReducer
  }
})

export type RootState = ReturnType<typeof store.getState>

// 暴露二次封装的getSeletor钩子，用于获取Reducer中的State值
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

// 暴露二次封装的dispatch()，用于触发Reducer中的action方法
export const useAppDispatch = () => useDispatch<typeof store.dispatch>()
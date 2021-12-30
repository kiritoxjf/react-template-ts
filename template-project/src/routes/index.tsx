import { lazy, ReactNode, Suspense } from "react";
import { RouteObject } from "react-router-dom";

// 懒加载
const Home = lazy(() => import('../pages/Home'))
const Demo = lazy(() => import('../pages/Demo'))

// 防闪屏，为单组件开启Loading
const LazyLoad = (e: ReactNode): ReactNode => {
  return (
    <Suspense fallback={<>loading...</>}>
      {e}
    </Suspense>
  )
}

// 路由表
const routes: RouteObject[] = [
  {
    path: '/',
    element: LazyLoad(<Home />)
  },
  {
    path: '/demo',
    element: LazyLoad(<Demo />)
  }
]

export default routes
import { Navigate, RouteObject, matchRoutes, useLocation, useRoutes } from 'react-router-dom'
import { IRoute } from '../type'
import { lazy, Suspense, useEffect, useState } from 'react'
import NoPage from '../pages/404'
import { Spin } from 'antd'
import LLayout from '../layouts'

/**
 * 加载路由
 */
const loadRouter = (_routes: IRoute[]): RouteObject[] => {
  return _routes.map((_route: IRoute): RouteObject => {
    const { redirect } = _route
    let Component
    if (redirect) {
      Component = () => <Navigate to={redirect}></Navigate>
    } else {
      Component = lazy(() => import(/* @vite-ignore */ `../${_route.component}`))
    }
    return {
      path: _route.path,
      element: (
        <Suspense fallback={<Spin></Spin>}>
          <Component />
        </Suspense>
      ),

      children: _route.children && loadRouter(_route.children)
    }
  })
}

interface IRouterProps {
  routes: IRoute[]
}

function Router(props: IRouterProps) {
  const location = useLocation()

  const [hasLayout, setHasLayout] = useState(false)

  const element = useRoutes(loadRouter(props.routes))

  useEffect(() => {
    //   console.log("进入");
    const match = matchRoutes(props.routes, location.pathname)

    const { layout = true } = match?.[0].route || { layout: false }

    setHasLayout(!!layout)

    return () => {
      // console.log("离开");
    }
  }, [location.pathname, props.routes])

  const el = <>{element || <NoPage></NoPage>}</>

  return <>{hasLayout ? <LLayout>{el}</LLayout> : <>{el}</>}</>
}

export default Router

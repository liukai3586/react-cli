import { useEffect, useState } from 'react'
import routes from './router'
import { IRoute } from './type'
import { Spin } from 'antd'
import Router from './router/Router'

function App() {
  const [loading, setLoading] = useState(true)
  const [newRoutes, setNewRoutes] = useState<IRoute[]>([])
  useEffect(() => {
    setTimeout(() => {
      setNewRoutes([
        { path: 'home', component: 'pages/Home' },
        { path: 'about', component: 'pages/About' }
      ])
      setLoading(false)
    }, 2000)
  }, [])

  return <>{loading ? <Spin></Spin> : <Router routes={[...routes, ...newRoutes]}></Router>}</>
}

export default App

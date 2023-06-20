import { IRoute } from '../type'

const routes: IRoute[] = [
  {
    path: '/',
    redirect: '/home'
  },

  {
    path: '/setting',
    component: 'pages/Setting'
  }
]

export default routes

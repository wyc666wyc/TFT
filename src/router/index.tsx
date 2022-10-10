import { useRoutes } from "react-router-dom";
import Preview from '../views/preview'
import Login from '../views/login/login'
import Charts from '../views/chartsView'
import Design from '../views/designView'

export default function RouterIndex() {
  const routeConfig = [
    {
      path: '/preview',
      element: <Preview />
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/design',
      element: <Design />
    },
    {
      path: '/charts',
      element: <Charts />
    },
  ]
  const routes = useRoutes(routeConfig)
  return routes
}
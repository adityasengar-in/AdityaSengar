import { RouterProvider , createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Layout from './Layout'
import Landing from './pages/Landing'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path="" element={<Landing />}/>
      

    </Route>
  )
)

function App() {
  return <RouterProvider router={router}/>;
}

export default App

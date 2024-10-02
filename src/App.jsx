import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import RedirectLink from "./pages/RedirectLink"
import LandingPage from "./pages/LandingPage"

function App() {

  const router = createBrowserRouter([{
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<LandingPage />
      },
      {
        path:'/dashboard',
        element:<Dashboard />
      },
      {
        path:'/auth',
        element:<Auth />
      },
      {
        path:'/snip/:id',
        element:<RedirectLink />
      },
    ]
  }])
  
  return (
    
    <RouterProvider router={router}/>
    
  )
}

export default App

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import AppLayout from "./layouts/AppLayout"
import Dashboard from "./pages/Dashboard"
import Auth from "./pages/Auth"
import RedirectLink from "./pages/RedirectLink"
// import LandingPage from "./pages/LandingPage"
import Landing from "./pages/Landing"
import { ThemeProvider, useTheme } from "./providers/theme-provider"

function App() {
  const router = createBrowserRouter([{
    element:<AppLayout />,
    children:[
      {
        path:'/',
        element:<Landing />
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

    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

    
    <RouterProvider router={router}/>
    </ThemeProvider>
    
  )
}

export default App

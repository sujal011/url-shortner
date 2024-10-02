import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSection from './NavSection'

const AppLayout = () => {
  return (
    <>
    
    <main>
        {/* header */}
        <header>
          <NavSection />
        </header>
        <Outlet />
    </main>
    {/* footer */}
    </>

  )
}

export default AppLayout
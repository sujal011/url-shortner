import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSection from './NavSection'


const AppLayout = () => {
  return (
    <>
    
    <main>
        {/* header */}
        <div className={`min-h-screen`}>
        <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <header>
          <NavSection/>
        </header>
          <main className="container mx-auto px-4 py-16">
          <Outlet/>
          </main>
        </div>
        </div>
        <footer className="bg-gray-100 dark:bg-gray-800 py-8">
          <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
            <p>&copy; 2024 Snip. All rights reserved.</p>
          </div>
        </footer>
    </main>
    {/* footer */}
    </>

  )
}

export default AppLayout
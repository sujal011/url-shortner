import React from 'react'
import { Outlet } from 'react-router-dom'
import NavSection from './NavSection'


const AppLayout = () => {
  return (

    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <NavSection />
      </header>
      <main className="flex-grow container mx-auto px-4 py-16">
        <Outlet />
      </main>
      <footer className="bg-muted py-8">
      <div className="container mx-auto px-4 text-center text-muted-foreground">
        <p>&copy; 2024 Snip. All rights reserved.</p>
      </div>
    </footer>
    </div>

  )
}

export default AppLayout
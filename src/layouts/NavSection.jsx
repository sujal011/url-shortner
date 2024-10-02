import { LogIn, Moon, Scissors, Sun } from 'lucide-react'
import React, { useState } from 'react'
import { useDarkMode } from 'usehooks-ts'
import ProfileButton from '../components/ProfileButton'

const NavSection = () => {
    const { isDarkMode, toggle } = useDarkMode()
    const toggleLogin = () => {
        setIsLoggedIn(!isLoggedIn) // Toggle login status (for demonstration)
      }
    const [isLoggedIn, setIsLoggedIn] = useState(false)
  return (
    <div className={`${isDarkMode ? 'dark' : ''}`}>

    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

    <nav className="container mx-auto p-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Scissors className="h-6 w-6" />
            <span className="text-2xl font-bold">Snip</span>
          </div>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggle}
              className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
              aria-label="Toggle theme"
              >
              {isDarkMode ? (
                  <Sun className="h-5 w-5" />
                ) : (
                    <Moon className="h-5 w-5" />
                )}
            </button>
            {isLoggedIn ? (
                // <button
                //   onClick={toggleLogin}
                //   className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
                //   aria-label="User profile"
                // >
                //   <User className="h-5 w-5" />
                // </button>
                <ProfileButton />
            ) : (
                <button
                onClick={toggleLogin}
                className="flex items-center space-x-2 px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700 transition-colors"
              >
                <LogIn className="h-5 w-5" />
                <span>Login</span>
              </button>
            )}
          </div>
        </nav>
    </div>
    </div>
  )
}

export default NavSection
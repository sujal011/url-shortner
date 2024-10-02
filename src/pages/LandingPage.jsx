import React, { useState } from 'react'
import { useDarkMode } from 'usehooks-ts'
import { Moon, Sun, Scissors, User, LogIn } from 'lucide-react'
import ProfileButton from '../components/ProfileButton'

export default function LandingPage() {
  const { isDarkMode, toggle } = useDarkMode()
  const [isLoggedIn, setIsLoggedIn] = useState(false) // State to track login status

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn) // Toggle login status (for demonstration)
  }

  return (
    <div className={`min-h-screen ${isDarkMode ? 'dark' : ''}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white">

        <main className="container mx-auto px-4 py-16">
          
        </main>

        
      </div>
    </div>
  )
}
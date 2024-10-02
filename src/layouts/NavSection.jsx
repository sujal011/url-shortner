import { LogIn, Moon, Scissors, Sun } from 'lucide-react'
import React, { useState } from 'react'
// import { useDarkMode } from 'usehooks-ts'
import ProfileButton from '../components/ProfileButton'
import { useTheme } from '../providers/theme-provider'
import { Link } from 'react-router-dom'
import {Button} from "./../components/ui/button"

const NavSection = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const {theme,setTheme}= useTheme();

    const themeToggle=()=>{

      if(theme == "light"){
        setTheme("dark")
      }else{
        setTheme("light")
      }
    }


  return (
    <div id="navbar" className="w-full border-b">
    <nav className="container mx-auto p-4 flex justify-between items-center">
      <div className="flex items-center space-x-2">
        <Scissors className="h-6 w-6" />
        <Link href="/">
          <span className="text-2xl font-bold">Snip</span>
        </Link>
      </div>
      <div className="flex items-center space-x-4">
        <Button
          variant="ghost"
          size="icon"
          onClick={themeToggle}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? (
            <Sun className="h-5 w-5" />
          ) : (
            <Moon className="h-5 w-5" />
          )}
        </Button>
        {isLoggedIn ? (
          <ProfileButton />
        ) : (
          <Link to="/auth">
            <Button onClick={()=>{}} className='text-white'>
              <LogIn className="mr-2 h-4 w-4" />
              Login
            </Button>
          </Link>
        )}
      </div>
    </nav>
  </div>
  )
}

export default NavSection
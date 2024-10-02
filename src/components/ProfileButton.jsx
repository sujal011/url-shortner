
import React from 'react'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Link, LogOut, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"



const ProfileButton = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="focus:outline-none">
        {/* <div className={`p-2 rounded-full ${
          {isDarkmode} ? 'bg-gray-800 text-gray-200 hover:bg-gray-700' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
        } transition-colors duration-200`}> */}
          <Avatar>
  <AvatarImage src="https://github.com/shadcn.png"/>
  <AvatarFallback>SB</AvatarFallback>
</Avatar>

        {/* </div> */}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="dark:bg-gray-800 dark:text-gray-200 bg-white text-gray-800rounded-md shadow-lg">
        <DropdownMenuLabel className="px-4 py-2 text-sm font-medium dark:hover:bg-gray-700 hover:bg-gray-100">
           My Account
        </DropdownMenuLabel>
        <DropdownMenuSeparator className={"dark:bg-gray-700 bg-gray-200"} />
        <DropdownMenuItem className='px-4 py-2 text-sm cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors duration-200'>
          <User className='inline mr-2 size-5'/>Profile
        </DropdownMenuItem>
        <DropdownMenuItem className='px-4 py-2 text-sm cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors duration-200'>
          <Link className='inline mr-2 size-5'/>My Links
        </DropdownMenuItem>
        <DropdownMenuItem className='px-4 py-2 text-sm cursor-pointer dark:hover:bg-gray-700 hover:bg-gray-100 transition-colors duration-200'>
          <LogOut className='inline mr-2 size-5 text-red-500'/>
          <p className='text-red-500'>Logout</p>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ProfileButton
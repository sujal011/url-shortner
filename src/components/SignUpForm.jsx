import React, { useState } from 'react'
import { Button } from "./../components/ui/button"
import { Input } from "./../components/ui/input"
import { Label } from "./../components/ui/label"
import Error from "./Error"

const SignUpForm = () => {
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  return (
    <div>
    <form className="flex flex-col space-y-4" onSubmit={()=>{}}>
     
      <Label>Email</Label>
      <Input
        type="email"
        placeholder="name@example.com"
        className="w-full md:w-96 border-gray-500 border-2 h-12"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Error message={"Some Error"} />
      <Label>Password</Label>
      <Input
        type="password"
        placeholder="your password"
        className="w-full md:w-96 border-gray-500 border-2 h-12"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Error message={"Some Error"} />
      <Button type="submit" className='text-white '>Submit</Button>
    </form>
    
  </div>
  )
}

export default SignUpForm
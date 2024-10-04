import React, { useState } from 'react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

import { useSearchParams } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

export default function Auth() {
  const [searchParams] = useSearchParams()
  const createNew = searchParams.get('createNew')


  return (
   <div className='h-full w-full flex items-center justify-center flex-col'>
  
    <Card className="max-sm:w-[80%] max-md:w-[70%]">
      <CardHeader>

      <CardTitle className="text-2xl max-sm:text-xl font-bold text-center">Welcome to Snip</CardTitle>
      <CardDescription className="text-center">
      {createNew ? "Login or create an account" : "Sign up to shorten your link"}
      </CardDescription>
      </CardHeader>
      <CardContent>
      <Tabs defaultValue="login">
      <TabsList className=" w-full justify-around items-center grid grid-cols-2">
        <TabsTrigger value="login" className="">Login</TabsTrigger>
        <TabsTrigger value="signup" className=" ">Signup</TabsTrigger>
      </TabsList>
      <TabsContent value="login">
        <LoginForm />
      </TabsContent>
      <TabsContent value="signup">
        <SignUpForm />
      </TabsContent>
    </Tabs>
      </CardContent>
    </Card>
    
   </div>
  )
}
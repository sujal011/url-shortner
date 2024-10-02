import React, { useState } from 'react'
// import { useSearchParams } from 'next/navigation'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { useSearchParams } from 'react-router-dom'
import SignUpForm from '../components/SignUpForm'
import LoginForm from '../components/LoginForm'

const formSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(6, { message: "Password must be at least 8 characters long" }),
})


export default function Auth() {
  const [searchParams] = useSearchParams()
  const createNew = searchParams.get('createNew')
  // const [loggedIn,setloggedin] = useState(false)

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  function onSubmit(values) {
    console.log(values)
    // Handle form submission
  }

  return (
   <div className='h-full w-full flex items-center justify-center flex-col'>
  
    <Card className="max-sm:w-[90%] max-md:w-[72%] max-lg:w-[67%]">
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
import React, { useState } from 'react'
// import { Card, CardDescription, CardHeader, CardTitle } from "./../components/ui/card"
import { Button } from "./../components/ui/button"
import { Input } from "./../components/ui/input"
import { Label } from "./../components/ui/label"
import { ClipLoader } from 'react-spinners'
import Error from "./Error"
import { z } from 'zod'

const formSchema = z.object({
  email: z.string().min(1,{message:"Email is required"}).email({ message: "Invalid email address" }).nullish({message:"Email is required"}),
  password: z.string().min(1,{message:"Password is required"}).min(6, { message: "Password must be at least 8 characters long" }),
})

const LoginForm = () => {
  const [loading,setLoading] = useState(false);
  const [formErrors,setFormErrors] = useState([{ email: '', password: '' }]);

  const [formData,setFormData] = useState({
    email:"",
    password:"",
  });

  const handleInputChange = (e)=>{
    const {name,value}= e.target;
    setFormData((prevstate)=>({
      ...prevstate,
      [name]: value,
    }))
    
  }

  const handleLogin = (e) =>{
    e.preventDefault();
    setLoading(true)

    const validation = formSchema.safeParse(formData);

    if(!validation.success){
      const errors = validation.error.format();
      setFormErrors({
        email: errors.email?._errors[0] || '',
        password: errors.password?._errors[0] || '',
      })
      setLoading(false);
      return

    }else{
      setFormErrors({ email: '', password: '' });
      // api auth
      setLoading(false);
    }
    
    
  }

  return (
    <div>
      <form className="flex flex-col space-y-4" onSubmit={handleLogin}>
       
        <Label>Email</Label>
        <Input
          type="email"
          name='email'
          placeholder="name@example.com"
          className="w-full md:w-96 border-gray-500 border-2 h-12"
          // value={formData.email}
          onChange={handleInputChange}
        />
      {formErrors.email && <Error message={formErrors.email} />}

        <Label>Password</Label>
        <Input
          type="password"
          name='password'
          placeholder="password"
          className="w-full md:w-96 border-gray-500 border-2 h-12"
          // value={formData.password}
          onChange={handleInputChange}
          />
        {formErrors.password && <Error message={formErrors.password} />}
        <Button type="submit" className='text-white '>
          {loading?(<ClipLoader size={15} />):"Submit"}
          </Button>
      </form>
      
    </div>
  )
}

export default LoginForm
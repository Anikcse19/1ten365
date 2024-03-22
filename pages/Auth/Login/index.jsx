import base_url from "@/utils/Url"
import axios from "axios"
import { useRouter } from "next/router"
import { useState } from "react"

const Login = () => {
  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')
  const router=useRouter()

  const handleLogin=()=>{
    const formData=new FormData()
    formData.append('email',email)
    formData.append('password',password)

    axios.post(`${base_url}/admins/login`,formData).then(res=>{
      if(res?.data?.msg=="success"){
        localStorage.setItem('token',res?.data?.token)
        router.push('/')
      }
    })
  }

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-stone-700">
        <div className="bg-stone-600 w-[500px] h-[500px]">
            <div className="text-center my-10">
              <span className="bg-stone-400 px-12 py-2 text-black font-bold">Login</span>
            </div>

            {/* form */}
            <div className="px-24 flex flex-col gap-6">
              {/* email field */}
              <div className="flex flex-col">
                <label className="text-white font-bold" htmlFor="">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className="px-5 py-2 outline-none rounded-sm" type="text" />
              </div>
               {/* password field */}
              <div className="flex flex-col">
                <label className="text-white font-bold" htmlFor="">Password</label>
                <input value={password} onChange={(e)=>setPassword(e.target.value)} className="px-5 py-2 outline-none rounded-sm" type="password" />
              </div>
            </div>
            {/* button */}
            <div className="mt-10 text-center">
              <button onClick={handleLogin} className="bg-purple-900 px-12 py-2 rounded-md text-white font-bold">Login</button>
            </div>
        </div>
      
    </div>
  )
}

export default Login

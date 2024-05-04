"use client"


import { useRouter } from "next/navigation";
import { Updatetodo } from "../action"
import { useState } from "react";


const Page = ({params}:{params:{id:string}}) => {
  const [val,setVal] = useState("")
  const router = useRouter()
  return (
    <div className="max-w-screen-sm mx-auto py-20 bg-white shadow-lg rounded-md  mt-20">
        <h1 className="text-4xl font-bold text-center py-4">Update task</h1>
      <div className="p-4"> <input
       type="text" 
       placeholder='Type task here' 
       
       required
      className='px-4 py-2 rounded-md border-2  border-gray-300 w-full'
      onChange={(e)=>setVal(e.target.value)}
      /></div>
      <div className="p-4"> <button className="text-lg bg-blue-500 hover:bg-blue-700 hover:text-white py-2 w-full rounded-md duration-300 font-semibold " onClick={()=>{
       Updatetodo("http://127.0.0.1:8080/todos", {
        task:val, id:Number(params.id)
       })
       setVal("")
       router.push("/")
}}>
  update
</button></div>
      
    </div>
  )
}

export default Page

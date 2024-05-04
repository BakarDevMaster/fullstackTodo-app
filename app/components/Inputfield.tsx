"use client"
import { useState } from "react";
import { Posttodo } from "../action";

const Inputfield = () => {
    const [val,setVal] = useState("")
  return (
    <div className='flex flex-col gap-y-4 '>
      <input
       type="text" 
       placeholder='Type task here' 
       value = {val}
       required
      className='px-4 py-2 rounded-md border-2 border-gray-300 w-full'
      onChange={(e)=>setVal(e.target.value)}
      />
     
    
     <button className='bg-sky-500  duration-300 hover:bg-sky-700 px-4 py-2 text-lg hover:text-white rounded-md font-semibold' onClick={()=>{
        Posttodo("http://127.0.0.1:8080/todos",{task:val})
        setVal("")
    }}>Add task</button>
    </div>
  )
}

export default Inputfield

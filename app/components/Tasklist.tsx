"use client"

import React from 'react'
import { Deletetodo } from '../action';
import { Gettodo } from '../action';
import Link from 'next/link';

const Tasklist = ({list}:{list:any}) => {

    
   
 
  return (
    <div className="bg-gradient-to-r from-yellow-500 to-red-600 w-screen h-screen">
    <div className="py-2">
    <div className="mx-auto  bg-white rounded-md max-w-screen-md flex ">
      <div className="w-full p-4">
    
    {
    list && list.map((task:any)=>{
        return <p key={task.id} className="bg-gray-400 text-lg  p-2 mt-4 rounded-md grid grid-cols-3  ">
      
          {task.task}
        <Link href={`/${task.id}`}>  <button className="text-lg text-green-600 hover:text-green-700 font-semibold " >
            update
          </button></Link>
          <button className="text-lg text-red-600  hover:text-red-700 font-semibold" onClick={()=>{
            Deletetodo("http://127.0.0.1:8080/todos",{
              task:task.task,
              id:task.id
            })
          }}>Delete</button>
          
        </p>
      })
    }
    </div>
    </div>
    </div>
  </div>
  )
}

export default Tasklist

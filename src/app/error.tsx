"use client";

import React, { useEffect } from 'react'

export default function error({error, reset} : {error:any, reset:any})  {
  useEffect(()=>{
    console.log(error);},
    [error])
    
    return (
    <div className= "text-center mt-10">
      <h1>something went wrong</h1>
      <button className="cursor-auto hover:text-amber-600" onClick ={() => 
        reset()}>try again</button> 
     
    </div>
  )
}

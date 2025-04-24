import React from 'react'

export default function Results({results}:{results:any}) {
  return (
    <div className='sm:grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 max-w-6xl mx-auto py-4'>
      {results.map((results:any)=>(
        <div>
          {results.title}
        </div>
      ))}
    </div>
  )
}

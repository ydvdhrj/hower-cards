import React, { useState } from 'react'

function Products({age, data}) {
  const [a, b] = useState(false);
  return (
    <div className='text-white w-full h-60 bg-zinc-800'>
        {/* <h1>{age}</h1>
        <h1>{data.age}</h1>
        <h1>{data.name}</h1> */}
        <h1 className={`${a === false ? "text-red-600" : "text-blue-600"}`}>{a === false ? "hello" : "hey dheeraj"}</h1>
        <button onClick={()=>b(!a)}>change</button>
    </div>
  )
}

export default Products
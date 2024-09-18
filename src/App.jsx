import React, { useEffect } from 'react'
import { useState } from 'react'
// import Products from './Products';

function App() {
  var[a,b] = useState(69);

  useEffect(()=>{
    const url = 'https://api.restful-api.dev/objects?id=3&id=5&id=10';
    // fetch data from the url
    fetch(url)
      .then(res => {
        console.log(res)
        if(!res.ok){
          throw new Error('data is not ok');
        }
        return res.json();
      })
      .then(data=>{
        setData(data);
        console.log(data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      })
  },[]);

  return (
    <div className='w-full h-screen bg-zinc-900 text-white p-5'>
      {/* <Products age="25" data={{age: 25, name: "dheeraj"}}/> */}
    </div>
  )
}

export default App
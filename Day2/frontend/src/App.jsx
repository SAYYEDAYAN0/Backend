import React, { useState } from 'react'
import axios from 'axios'

function App() {

  const [data, setData]= useState([]);


  axios.get("http://localhost:3000/data")
  .then(Response => {
    setData(Response.data);
  })

  .catch(error => {
    console.error('Error fetching data:', error);
  })

  return (
    <>
    <h1> hello js </h1>


    {<h4> the length = { data.length} </h4>}

    {
      data.map((item)=> (
        <div key={item.id}>
          <h2> {item.name} </h2>
          <p> {item.description} </p>
        </div>
      ))
    }



    
    </>
  )
}

export default App
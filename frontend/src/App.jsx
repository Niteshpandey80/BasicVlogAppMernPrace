import React, { useState } from 'react'
import Vloglist from './components/Vloglist'
import AddVlog from './components/AddVlog'
import axios from 'axios'

const App = () => {
  const [vlog, setVlog] = useState([]) ;
  const fechVlog = async()=>{
    const res =  axios.get("http://localhost:3000/vlogs");
    setVlog(res.data)
  }
  return (
    <div className='App'>
        <h1>My Vlog</h1>
        <AddVlog/>
        <Vloglist/>
    </div>
  )
}

export default App

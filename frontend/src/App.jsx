import React, { useEffect, useState } from 'react'
import Vloglist from './components/Vloglist'
import AddVlog from './components/AddVlog'
import axios from 'axios'

const App = () => {
  const [vlog, setVlog] = useState([]) ;
  const fetchVlog = async()=>{
    const res = await axios.get("http://localhost:3000/vlogs");
    setVlog(res.data)
  }
  useEffect(()=>{
    fetchVlog();
  },[])
  return (
    <div className='App'>
        <h1>My Vlog</h1>
        <AddVlog fetchVlog={fetchVlog} />
        <Vloglist vlog={vlog} fetchVlog={fetchVlog} />
    </div>
  )
}

export default App

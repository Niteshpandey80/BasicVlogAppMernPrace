import React, { useEffect, useState } from 'react'
import Vloglist from './components/Vloglist'
import AddVlog from './components/AddVlog'
import axios from 'axios'

const App = () => {
  const [vlog, setVlog] = useState([]);

  const fetchVlog = async () => {
    const res = await axios.get("http://localhost:3000/vlogs");
    setVlog(res.data);
  };

  useEffect(() => {
    fetchVlog();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">🎥 My Vlog App</h1>
      <div className="max-w-2xl mx-auto">
        <AddVlog fetchVlog={fetchVlog} />
        <Vloglist vlog={vlog} fetchVlog={fetchVlog} />
      </div>
    </div>
  )
}

export default App

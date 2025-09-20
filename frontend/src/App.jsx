import React from 'react'
import Vloglist from './components/Vloglist'
import AddVlog from './components/AddVlog'

const App = () => {
  return (
    <div className='App'>
        <h1>My Vlog</h1>
        <AddVlog/>
        <Vloglist/>
    </div>
  )
}

export default App

import React, { useState } from 'react'

const AddVlog = () => {
  const [title , setTitle] = useState("");
  const [description , setDescription] = useState("");
  const [videourl , setVideourl] = useState("");
  
  const handleSubmit = async (e)=>{
    e.preventDefault();

  }
   return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder='Enter Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <input type="text" placeholder='Enter Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
        <input type="text" placeholder='Enter Video Url' value={videourl} onChange={(e)=>setVideourl(e.target.value)} />
        <button type='Submit '>Add Vlog</button>
      </form>
    </div>
  )
}

export default AddVlog

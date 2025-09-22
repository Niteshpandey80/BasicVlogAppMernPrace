import React, { useState } from 'react'
import axios from 'axios';

const AddVlog = ({ fetchVlog }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [videourl, setVideourl] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:3000/vlogs', { title, description, videoUrl: videourl  });
    setTitle(""); setDescription(""); setVideourl("");
    fetchVlog();
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-xl p-4 mb-6">
      <h2 className="text-xl font-semibold mb-3 text-gray-700">Add a New Vlog</h2>
      <div className="flex flex-col gap-3">
        <input
          type="text"
          placeholder="Enter Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="Enter Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <input
          type="text"
          placeholder="Enter Video URL"
          value={videourl}
          onChange={(e) => setVideourl(e.target.value)}
          className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400 outline-none"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
        >
          ➕ Add Vlog
        </button>
      </div>
    </form>
  );
};

export default AddVlog;

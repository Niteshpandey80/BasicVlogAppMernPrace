import axios from 'axios'
import React, { useState } from 'react'

const Vloglist = ({ vlog, fetchVlog }) => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3000/vlogs/${id}`);
    fetchVlog();
  };

  const handleWatchVideo = (videoUrl, title) => {
    setSelectedVideo({ videoUrl, title });
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <div>
      {/* Video Modal */}
      {selectedVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg overflow-hidden w-full max-w-2xl">
            <div className="flex justify-between items-center p-4 border-b">
              <h3 className="text-lg font-semibold">{selectedVideo.title}</h3>
              <button 
                onClick={closeVideo}
                className="text-gray-500 hover:text-gray-700"
              >
                ✕
              </button>
            </div>
            <div className="p-4">
              <video 
                controls 
                autoPlay
                className="w-full h-auto"
                src={selectedVideo.videoUrl}
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}

      {/* Vlog List */}
      {
        vlog.length === 0 ? (
          <p className="text-center text-gray-500 mt-6">😢 There are no vlogs yet</p>
        ) : (
          <div className="grid gap-4">
            {vlog.map((vlogs) => (
              <div
                key={vlogs._id}
                className="bg-white shadow-md rounded-xl p-4 border hover:shadow-lg transition"
              >
                <h3 className="text-lg font-semibold text-gray-800">{vlogs.title}</h3>
                <p className="text-gray-600">{vlogs.description}</p>
                <button
                  onClick={() => handleWatchVideo(vlogs.videoUrl, vlogs.title)}
                  className="text-blue-500 underline mt-2 inline-block cursor-pointer"
                >
                  🎬 Watch Video
                </button>
                <br />
                <button
                  onClick={() => handleDelete(vlogs._id)}
                  className="mt-3 bg-red-500 text-white px-3 py-1 rounded-lg hover:bg-red-600 transition"
                >
                  🗑️ Delete
                </button>
              </div>
            ))}
          </div>
        )
      }
    </div>
  )
}

export default Vloglist
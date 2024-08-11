import React from 'react'
import { useData } from '../ContextApi/Context'

const DeletePop = ({ close }) => {
  const{del,loading} = useData();
  return (
    <div 
      className="fixed inset-0 bg-gray-300 bg-opacity-50 flex items-center justify-center z-50" 
      onClick={close}
    >
      <div 
        className="bg-black text-center p-6 rounded-lg shadow-lg w-full max-w-sm" 
        onClick={(e) => e.stopPropagation()}
      >
        <h5 className="text-xl text-gray-200 font-semibold mb-2">Are You Sure?</h5>
        <h3 className="text-lg text-gray-300 mb-4">Your Email Will be Deleted</h3>
        <div className="flex justify-center space-x-4">
          <button 
            className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded" 
            onClick={close}
          >
            Cancel
          </button>
          <button 
            className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded" 
            onClick={() => {
              // Handle the delete action here
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  )
}

export default DeletePop

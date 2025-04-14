import React from 'react'

const Modal = ({ isModelOpen, setIsModelOpen, children }) => {
    if(!isModelOpen) return null;
    
    return (
        <div className='fixed inset-0 bg-gray-400 bg-opacity-30 backdrop-blur-sm flex items-center justify-center z-50 p-4'>
            <div className='bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative'>
                <button 
                    className='absolute top-2 right-2 text-gray-600 text-3xl' 
                    onClick={() => setIsModelOpen(false)}
                >
                    &times;
                </button>
                {children}
            </div>
        </div>
    )
}

export default Modal
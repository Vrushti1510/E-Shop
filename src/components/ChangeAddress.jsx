import React, { useState } from 'react'

const ChangeAddress = ({ onSave, onCancel }) => {
    const [newAddress, setNewAddress] = useState('');

    const handleSave = () => {
        if (newAddress.trim()) {
            onSave(newAddress);
        }
    };

    return (
        <div>
            <h2 className='text-xl font-semibold mb-4'>Change Shipping Address</h2>
            <input 
                type='text' 
                value={newAddress}
                onChange={(e) => setNewAddress(e.target.value)}
                placeholder='Enter new address'
                className='border p-2 w-full mb-4'
            />
            <div className='flex justify-end'>
                <button 
                    className='bg-gray-500 text-white py-2 px-4 rounded mr-2'
                    onClick={onCancel}
                >
                    Cancel
                </button>
                <button 
                    className='bg-blue-500 text-white py-2 px-4 rounded'
                    onClick={handleSave}
                >
                    Save Address
                </button>
            </div>
        </div>
    )
}

export default ChangeAddress
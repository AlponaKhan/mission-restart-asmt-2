import React from 'react';

const TaskStatus = () => {
    return (
        <div>
            <div className='bg-white shadow-md rounded-sm p-4'>
                <h2 className='font-medium text-lg pb-4'>Payment Failed - Card Declined</h2>
                <button className='text-white font-semibold bg-green-600 rounded-sm py-2 text-center w-full'>Complete</button>
            </div>
        </div>
    );
};

export default TaskStatus;
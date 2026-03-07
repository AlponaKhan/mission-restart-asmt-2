import React from 'react';

const TaskStatus = ({ data, removeTask, titled, handleCompletedTask }) => {

    const handleRemove = (task) => {
        removeTask(task);

    }

    return (
        <div>

            {titled.length === 0 ? (<h2 className='font-medium text-lg pb-4 text-gray-400'>No task added</h2>) :
                (titled.map((title, index) =>
                    <div key={index} className='bg-white shadow-md rounded-sm p-4 mb-4'>
                        <h2 className='font-medium text-lg pb-4'>{title}</h2>
                        <button onClick={() => { handleCompletedTask(title); handleRemove(title) }} className='text-white font-semibold bg-green-600 rounded-sm py-2 text-center w-full'>Complete</button>
                    </div>
                ))
            }

        </div>
    );
};

export default TaskStatus;
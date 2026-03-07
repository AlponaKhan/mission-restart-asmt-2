import React from 'react';

const Resloved = ({ resolved }) => {
    return (
        <div>

            {
                resolved.length === 0 ? (<p className='text-gray-400'>No resolved tasks yet.</p>) :
                    (resolved.map((title, index) =>
                        <div key={index} className='bg-sky-100 shadow-md rounded-sm p-4 mb-4'>
                            <h2 className='font-medium text-lg'>{title}</h2>
                        </div>
                    ))
            }

        </div>
    );
};

export default Resloved;
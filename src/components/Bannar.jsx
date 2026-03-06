import React from 'react';
import vector1 from '../assets/vector1.png';

const Bannar = () => {
    return (
        <div className='md:p-20 grid md:grid-cols-2 gap-6 px-5 py-12'>
            {/* In progress */}
            <div style={{ backgroundImage: `linear-gradient(to top left, #9F62F2, #632EE3)` }} className='rounded-lg'>
                <div style={{ backgroundImage: `url(${vector1})` }} className=' md:p-20 text-center rounded-lg bg-repeat-x bg-size-[50%_100%]'>
                    <h2 className='text-2xl'>In-Progress</h2>
                    <p className='text-6xl font-semibold'>0</p>
                </div>
            </div>
            {/* Resolved */}
            <div style={{ backgroundImage: `linear-gradient(to top left, #00827A, #54CF68)` }} className='rounded-lg'>
                <div style={{ backgroundImage: `url(${vector1})` }} className=' md:p-20 text-center rounded-lg bg-repeat-x bg-size-[50%_100%]'>
                    <h2 className='text-2xl'>Resolved</h2>
                    <p className='text-6xl font-semibold'>0</p>
                </div>
            </div>
        </div>
    );
};

export default Bannar;
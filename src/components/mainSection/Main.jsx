import React from 'react';
import Cards from './Cards';


const Main = ({ customerPromise }) => {
    return (
        <div>
            <div className='grid  md:gap-8 md:grid-cols-3 justify-between  md:px-20 pb-8'>
                <div className='col-span-2'>
                    <Cards customerPromise={customerPromise}></Cards>
                </div>
                <div className='col-span-1'>
                    <h2>Task Status</h2>
                    <h2>Resolved Task</h2>
                </div>
            </div>
        </div>
    );
};

export default Main;
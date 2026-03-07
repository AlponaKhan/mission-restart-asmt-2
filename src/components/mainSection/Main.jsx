import React from 'react';
import Cards from './Cards';
import TaskStatus from './TaskStatus';
import Resloved from './Resloved';


const Main = ({ customerPromise }) => {
    return (
        <div>
            <div className='grid grid-cols-1 md:gap-8 md:grid-cols-3 justify-between  md:px-20 pb-10 px-5'>
                <div className='md:col-span-2'>
                    <Cards customerPromise={customerPromise}></Cards>
                </div>
                <div className='md:col-span-1'>
                    <div>
                        <h2 className='font-semibold text-2xl'>Task Status</h2>
                        <TaskStatus></TaskStatus>
                    </div>
                    <div>
                        <h2 className='font-semibold text-2xl'>Resolved Task</h2>
                        <Resloved></Resloved>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
import React, { use } from 'react';
import Cards from './Cards';
import TaskStatus from './TaskStatus';
import Resloved from './Resloved';




const Main = ({cards,removeTask, data, handleCardClick, handleCompletedTask, resolved,titled }) => {
    // const customerProblems = use(customerPromise);
 
    return (
        <div>
            <div className='grid grid-cols-1 md:gap-8 md:grid-cols-3 justify-between  md:px-20 pb-10 px-5'>
                <div className='md:col-span-2'>
                    <Cards cards={cards} handleCardClick={handleCardClick} data={data}></Cards>
                </div>
                <div className='md:col-span-1'>
                    <div>
                        <h2 className='font-semibold text-2xl pb-2 pt-5'>Task Status</h2>
                        <TaskStatus removeTask={removeTask} handleCompletedTask={handleCompletedTask} data={data} titled={titled}></TaskStatus>
                    </div>
                    <div>
                        <h2 className='font-semibold text-2xl pb-2'>Resolved Task</h2>
                        <Resloved resolved={resolved}></Resloved>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
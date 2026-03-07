import React, { use } from 'react';


const CustomerCard = ({ problem }) => {
    // const customerProblems = use(customerPromise);
    // console.log(customerProblems);
    console.log(problem);
    const { id, title, description, customer, priority, status, createdAt } = problem;
    return (
        <div>
            <div className='bg-white shadow-md rounded-sm '>
                    <div className='px-4'>
                        <div className='flex justify-between items-center  pt-4'>
                            <h2 className='font-medium md:text-lg '>{title}</h2>
                            <p className={`font-medium text-xs md:text-base flex gap-1 justify-center items-center  py-1 px-2 md:px-3 rounded-full  ${status==='Open'?'bg-green-300 text-green-700': 'bg-yellow-300 text-yellow-700'}`}>
                                <i class="fa-solid fa-circle fa-xs"></i>
                                {status}</p>
                        </div>
                        <p className='text-gray-400 pt-2 text-sm md:text-base'>{description}</p>
                        <div className='flex justify-between items-center py-4'>
                            <div className='flex items-center md:gap-4 gap-2'>
                                <p className='font-medium md:text-sm text-xs text-gray-400'>#{id}</p>
                                <p className={`font-medium md:text-sm text-xs ${priority ==='High priority'? 'text-red-400' :priority ==='Medium priority'? 'text-yellow-400': 'text-green-400' }`}>{priority.toUpperCase()}</p>
                            </div>
                            <div className='flex items-center gap-2 md:gap-4'>
                                <p className='md:text-sm text-xs text-gray-400'>{customer}</p>
                                <p className='md:text-sm text-xs text-gray-400 flex gap-1 justify-center items-center'>
                                    <i class="fa-regular fa-calendar fa-lg"></i>
                                    {createdAt}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    );
};

export default CustomerCard;
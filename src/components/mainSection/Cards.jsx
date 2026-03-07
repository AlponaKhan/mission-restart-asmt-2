import React, { use } from 'react';
import CustomerCard from './CustomerCard';

const Cards = ({ customerPromise }) => {
    const customerProblems = use(customerPromise);
    // console.log(customerProblems);
    return (
        <div>
            <h2 className='text-2xl font-semibold'>Customer Tickets</h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {
                    customerProblems.map(problem => <CustomerCard problem={problem}></CustomerCard>)
                }
            </div>
        </div>
    );
};

export default Cards;
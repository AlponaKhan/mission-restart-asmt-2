import React from 'react';
import CustomerCard from './CustomerCard';

const Cards = ({cards, data,handleCardClick }) => {
    return (
        <div>
            <h2 className='text-2xl font-semibold pb-2'>Customer Tickets</h2>

            <div className='grid grid-cols-1 gap-6 md:grid-cols-2'>
                {
                    cards.map(problem => <CustomerCard key={problem.id} handleCardClick={handleCardClick} problem={problem}></CustomerCard>)
                }
            </div>
        </div>
    );
};

export default Cards;
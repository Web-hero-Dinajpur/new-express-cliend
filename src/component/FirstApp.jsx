import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffees from './Coffees';

const FirstApp = () => {

    const coffees = useLoaderData();

    return (
        <div className='m-20'>
            <h2 className='text-center text-6xl text-purple-600'>Hot Hot Cold Coffee : {coffees.length}</h2>
            <div className='grid md:grid-cols-2 gap-4'>
                {
                    coffees.map(coffee => <Coffees
                        key={coffee._id}
                        coffee={coffee}
                    ></Coffees>)
                }
            </div>
        </div>
    );
};

export default FirstApp;
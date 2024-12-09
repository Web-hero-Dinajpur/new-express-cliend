import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FirstApp = () => {

    const coffee = useLoaderData();

    return (
        <div>
            <h2>Hot Hot Cold Coffee : {coffee.length}</h2>
        </div>
    );
};

export default FirstApp;
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Charts from '../Charts/Charts';

const Statistic = () => {
    const data = useLoaderData().data
    return (
        <div>
            <h2>Statistic of quiz </h2>
            <Charts
                data={data}
            ></Charts>
        </div>
    );
};

export default Statistic;
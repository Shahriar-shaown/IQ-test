import React from 'react';
import { CartesianGrid, Legend, Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const Charts = ({ data }) => {
    return (
        <BarChart width={730} height={250} data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis dataKey="total"/>
            <Tooltip />
            <Legend />
            <Bar dataKey="name" fill="#8884d8" />
            <Bar dataKey="total" fill="#82ca9d" />
        </BarChart>
    );
};

export default Charts;
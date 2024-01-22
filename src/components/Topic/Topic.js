import React from 'react';
import './Topic.css'
import { Link } from 'react-router-dom';
const Topic = ({ topic }) => {
    const { name, logo, id } = topic;
    return (
        <div className='topic'>
            <img src={logo} alt="" />
            <div className='btn-quiz'>
                <h6><small>{name}</small></h6>
                <Link to={`/quiz/${id}`}><button className='btn'>Start practice</button></Link>
            </div>
        </div>
    );
};

export default Topic;
import React from 'react';
import './Header.css';
import IQImage from '../../Images/img.png';  // Adjust the path based on your structure
import Topics from '../Topics/Topics';
import { useLoaderData } from 'react-router-dom';

const Header = () => {
    const topicss = useLoaderData()
    const headerStyle = {
        backgroundImage: `url(${IQImage})`,
        marginTop: '-50px',
        height: "30vh",
        fontSize: "50px",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
    };

    return (
        <div style={headerStyle}>
            <p className='hFive'><small>The winner's edge is not in a gifted birth, a high IQ, or in talent. The winner's edge is all in the attitude, not aptitude.</small></p>
            <Topics topicss={topicss}></Topics>
        </div>
    );
};

export default Header;

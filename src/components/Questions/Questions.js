import React, { useState } from 'react';
import './Questions.css';
import { toast } from 'react-toastify';
import { EyeIcon } from '@heroicons/react/24/solid'

const Questions = ({ quiz, handleClicked }) => {
    const { question, correctAnswer, options } = quiz;

    const [selectedOption, setSelectedOption] = useState();
    const handleIcon = () => {
        toast.info(`Correct Answer: ${correctAnswer}`);
    }
    const handleOptionClick = (clickedOption) => {
        setSelectedOption(clickedOption);

        // Check if the selected option is correct
        if (clickedOption === correctAnswer) {
            toast.success('This is the correct answer!!');
            handleClicked(true)
        }
        else{
            handleClicked(false)
        }
    };

    return (
        <div className='main-container'>
            <div>
                <div className='eyesection'>
                    <h2>---Quiz---</h2>
                    <EyeIcon onClick={() => handleIcon()} className='eye' />
                </div>
                <p className='question'>{question}</p>
                <div className='options'>
                    {options.map((option, index) => (
                        <div
                            key={index}
                            className='option'
                            onClick={() => handleOptionClick(option)}
                        >
                            <input type="radio" checked={selectedOption === option} />
                            {option}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Questions;

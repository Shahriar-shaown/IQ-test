import React, { useState } from 'react';
import './Quiz.css'
import { useLoaderData } from 'react-router-dom';
import Questions from '../Questions/Questions';

const Quiz = () => {
    const quizss = useLoaderData()
    const quizs = (quizss.data.questions)

    const [totalCorrectAnswers, setTotalCorrectAnswers] = useState(0);

  const handleClicked = (isCorrect) => {
    if (isCorrect) {
      setTotalCorrectAnswers((prevTotal) => prevTotal + 1);
    }}
    return (
        <div className='main'>
            <div className='quiz'>
                <h1>Quiz of {quizss.data.name}</h1>
                {
                    quizs.map(quiz => <Questions
                        key={quizss.data.id}
                        quiz={quiz}
                        handleClicked={handleClicked}
                    ></Questions>)
                }
            </div>
            <div>
                <h4>Your total correct ans: {totalCorrectAnswers}</h4>
            </div>
        </div>
    );
};

export default Quiz;
import React from 'react';
import './Topics.css'
import Topic from '../Topic/Topic';
const Topics = ({topicss}) => {
    const topics = topicss.data
    return (
        <div className='topics'>
            {
                topics.map(topic=><Topic
                    key={topic.id}
                    topic={topic}
                ></Topic>)
            }
        </div>
    );
};

export default Topics;
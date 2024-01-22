import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2>What is the purpose of react router?</h2>
            <p>React router is a javascript framework that let's us handle client & server-side routing in the React application. It enables the creation of single page web or mobile app that allow navigating without refreshing the page.</p>
            <br />
            <h2>How does the context API works?</h2>
            <p>Context API allows data to be passed in a component tree without passing props at every level manually. This makes to share data easier between components</p>
            <br />
            <h2>Tell us about useRef hook .</h2>
            <p>The useRef Hook allows you to persist values between renders.It can be used to store a mutable value that does not cause a re-render when updated.It can be used to access a DOM element directly.</p>

        </div>
    );
};

export default Blog;
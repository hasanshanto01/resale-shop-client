import React from 'react';

const Blog = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-3xl text-primary font-bold text-center'>Blog</h2>

            <div className='mt-10 w-10/12 mx-auto'>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p>The Four Kinds of React State to Manage</p>
                        <ul class="list-disc">
                            <li>Local state.</li>
                            <li>Global state.</li>
                            <li>Server state.</li>
                            <li>URL state.</li>
                        </ul>
                    </div>
                </div>
                <div tabIndex={1} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use <strong>Object.getPrototypeOf</strong> and <strong>Object.setPrototypeOf</strong>. Nowadays, in modern language, it is being set using <strong>__proto__</strong>.</p>
                    </div>
                </div>
                <div tabIndex={2} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test? Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p>Unit testing is a software testing method where “units”—the individual components of software—are tested. Developers write unit tests for their code <strong>to make sure that the code works correctly.</strong>
                            <br />
                            Unit testing is an important step in the development process, because if done correctly, <strong>it can help detect early flaws in code which may be more difficult to find in later testing stages.</strong>
                        </p>
                    </div>
                </div>
                <div tabIndex={4} className="collapse collapse-arrow border border-base-300 bg-base-100 rounded-box">
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p>A simple difference between these three is that <strong>React is a UI library</strong>, and <strong>Vue is a progressive framework</strong>. However, <strong>Angular is a full-fledged front-end framework</strong>. As per StackOverflow Survey 2022, React is the favorite framework of 40.14% of developers, Angular with 22.96%, and Vue with 18.97% of developers.</p>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Blog;
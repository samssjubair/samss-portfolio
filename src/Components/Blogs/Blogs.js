import React from 'react';
import blog1 from '../../Images/blog1.png'
import blog2 from '../../Images/blog2.png'
import blog3 from '../../Images/blog3.png'
import blog4 from '../../Images/blog4.png'
import blog5 from '../../Images/blog5.png'
import Blog from './Blog/Blog';
const blogs=[
    {
        id: 1,
        publishedOn: 'medium',
        title: "What the heck are JS event bubbling and event delegation and why should you use these?",
        image: blog1,
        url: 'https://samssjubair.medium.com/what-the-heck-are-js-event-bubbling-and-event-delegation-and-why-should-you-use-these-f7d84392935c'
    },
    {
        id: 2,
        publishedOn: 'medium',
        title: "10 Javascript Basic String Methods for Beginners",
        image: blog2,
        url: 'https://samssjubair.medium.com/10-javascript-basic-string-methods-every-beginner-should-know-33fac7f96c24'
    },
    {
        id: 3,
        publishedOn: 'medium',
        title: "10 Confusing Javascript Topic and Best Resources to Learn These",
        image: blog3,
        url: 'https://samssjubair.medium.com/10-confusing-javascript-topic-and-best-resources-to-learn-these-e6a705c775c0'
    },
    {
        id: 4,
        publishedOn: 'dev.to',
        title: "10 Javascript Very Basic Interview Questions You Should Know",
        image: blog4,
        url: 'https://dev.to/samssjubair/10-javascript-interview-questions-you-should-know-2hc0'
    },
    {
        id: 5,
        publishedOn: 'dev.to',
        title: "10 Things You Need To Learn About Before Starting ReactJS",
        image: blog5,
        url: 'https://dev.to/samssjubair/10-things-you-need-to-learn-about-before-starting-reactjs-1nkp'
    }
]

const Blogs = () => {
    return (
        <section id="blogs" >
            <h1 className="port-font my-5 text-danger">Blogs</h1>
            <div data-aos="zoom-in-up" className="row container-fluid mt-5 m-auto ">
                {
                    blogs.map(blog=> <Blog blog={blog}></Blog> )
                }
            </div>
        </section>
    );
};

export default Blogs;
import React from 'react';
import blog1 from '../../Images/manna-blog.png'
import Blog from './Blog/Blog';
const blogs=[
    {
        title: "What the heck are JS event bubbling and event delegation and why should you use these?",
        image: blog1,
        url: 'https://samssjubair.medium.com/what-the-heck-are-js-event-bubbling-and-event-delegation-and-why-should-you-use-these-f7d84392935c'
    }
]

const Blogs = () => {
    return (
        <div >
            <h1 className="port-font my-5 text-danger">Blogs</h1>
            <div data-aos="zoom-in-up" className="row container-fluid mt-5 m-auto">
                {
                    blogs.map(blog=> <Blog blog={blog}></Blog> )
                }
            </div>
        </div>
    );
};

export default Blogs;
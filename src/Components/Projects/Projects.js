import React from 'react';
import eventPossibleImg from '../../Images/event-possible2.png'
import bookWormImg from '../../Images/book.png'
import emaJohnImg from '../../Images/ema.png'
import fastRideImg from '../../Images/fast.png'
import doctorsPortalImg from '../../Images/doctors.png'
import Project from './Project/Project';

const projects=[
    {
        id: 1,
        name: 'Event-Possible',
        usedTechnology: 'React JS, MongoDB, NodeJS, Express, Bootstrap, React-router-dom,React-Hook-Form, Heroku, Stripe and Firebase',
        details: 'A complete event management website. Easy authentication process with Google Services are dynamic. Admin can add, remove services ,Admin can add another admin. User can see their own booking list and booking status. Stripe is used as payment system',
        liveSite: 'https://event-possible.web.app/',
        github: 'https://aqueous-dawn-15668.herokuapp.com/',
        image: eventPossibleImg
    },
    {
        id: 2,
        name: 'Book-Worm',
        usedTechnology: 'React JS, MongoDB, NodeJS, Express, Material UI, React-router-dom, React-Hook-Form, Heroku, and Firebase',
        details: 'Online book selling E-commerce website.This is a fullstack project built using MongoDB, Node, ReactJS and Express. Material UI is also used for UI design, and Firebase has been used for authentication and hosting. Backend is deployed in heroku and database in MongoDB atlas. React hook form is also used for validation.',
        liveSite: 'https://book-worm-fddd7.web.app/',
        github: 'https://github.com/samssjubair/book-worm-client',
        image: bookWormImg
    },
    {
        id: 3,
        name: 'Ema-John',
        usedTechnology: 'React JS, MongoDB, NodeJS, Express, Bootstrap, React-router-dom, React-Hook-Form, Heroku, Stripe and Firebase',
        details: 'This is a clone of Amazon. This was developed for learning purpose. It has Google sign up and email login and sign up method. MongoDB atlas has been used for Database. Stripe has been used as payment gateway system, It still has some features to update',
        liveSite: 'https://ema-john-2c7b2.web.app/',
        github: 'https://github.com/samssjubair/ema-john',
        image: emaJohnImg
    },
    {
        id: 4,
        name: 'Fast-ride',
        usedTechnology: 'React JS,  Material UI, Font-Awesome, ImageBB, React-router-dom, React-Hook-Form and Firebase',
        details: 'A react app using material UI, firebase authentication and google map api to find ride. You can get your bike, car, bus or train ride easily using this website, user authentication is very easy too as you can log in with both google and facebook. Maps will assist you to get the best of it. Enjoy fast-ride!!',
        liveSite: 'https://fast-ride-dhaka.netlify.app/',
        github: 'https://github.com/samssjubair/fast-ride',
        image: fastRideImg
    },
    {
        id: 5,
        name: "Doctors Portal",
        usedTechnology: 'React JS, MongoDB, NodeJS, Express, Bootstrap, React-router-dom, React-Hook-Form, React-Calender, Heroku, and Firebase',
        details: 'An website where patients can book their dental appointment easily. Doctors can access their daily patients appointment list, Doctors can add more doctors. Easy authentication system using google sign up which all make this website very easy to use for both doctors and patients. The development is still running.',
        liveSite: 'https://doctors-portal-a37ad.web.app/',
        github: 'https://github.com/samssjubair/doctors-portal',
        image: doctorsPortalImg
    }

    
]

const Projects = () => {
    return (
        <div>
            <h1 className="text-danger port-font m-5">Projects</h1>
            <div className="container py-5">
            {
                projects.map(proj=> <Project project={proj}></Project> )
            }
            </div>
        </div>
    );
};

export default Projects;
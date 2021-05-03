import React from 'react';
import android from '../../Images/icons/android.png'
import premiere from '../../Images/icons/adobe-premiere-pro.png'
import astudio from '../../Images/icons/android-studio.png'
import bootstrap from '../../Images/icons/bootstrap.png'
import cpp from '../../Images/icons/c (1).png'
import c from '../../Images/icons/c.png'
import chrome from '../../Images/icons/chrome.png'
import css from '../../Images/icons/css.png'
import express from '../../Images/icons/express.png'
import firebase from '../../Images/icons/firebase.png'
import git from '../../Images/icons/git.png'
import gmaps from '../../Images/icons/google-maps.png'
import heroku from '../../Images/icons/heroku.png'
import html from '../../Images/icons/html.png'
import ai from '../../Images/icons/illustrator.png'
import java from '../../Images/icons/java.png'
import js from '../../Images/icons/javascript.png'
import leaflet from '../../Images/icons/leafletjs.png'
import linux from '../../Images/icons/linux.png'
import material from '../../Images/icons/material.png'
import mongo from '../../Images/icons/mongodb.png'
import mongoose from '../../Images/icons/mongoose.png'
import mssql from '../../Images/icons/mssql.png'
import netlify from '../../Images/icons/netlify.png'
import node from '../../Images/icons/nodejs.png'
import oracle from '../../Images/icons/oracle.png'
import ps from '../../Images/icons/photoshop.png'
import ts from '../../Images/icons/typescript.png'
import php from '../../Images/icons/php.png'
import python from '../../Images/icons/python.png'
import native from '../../Images/icons/react-native.png'
import react from '../../Images/icons/react.png'
import redux from '../../Images/icons/redux.png'
import sass from '../../Images/icons/sass.png'
import stripe from '../../Images/icons/stripe.png'
import vscode from '../../Images/icons/visual-studio-code.png'
import windows from '../../Images/icons/windows.png'
import Skill from './SkillSet/Skill';
import Education from './Education/Education';
const expertise=[
    {name: 'Javascript',img: js},
    {name: 'HTML5',img: html},
    {name: 'CSS',img: css},
    {name: 'React',img: react},
    {name: 'Bootstrap',img: bootstrap},
    {name: 'Material UI',img: material},
    {name: 'Firebase',img: firebase },
    {name: 'Netlify',img: netlify},
]
const comfortable=[
    {name: 'NodeJS',img: node},
    {name: 'ExpressJS',img: express},
    {name: 'MongoDB',img: mongo},
    {name: 'Heroku',img: heroku },
    {name: 'Python',img: python },
    {name: 'C',img: c},
    {name: 'C++',img: cpp},
    {name: 'Google Maps API',img: gmaps}
]

const familiar=[
    
    {name: 'Java',img: java },
    {name: 'MS SQL Server',img: mssql},
    {name: 'Oracle DB',img: oracle},
    {name: 'Android',img: android},
    {name: 'PHP',img: php },
    {name: 'Stripe',img: stripe},
    {name: 'Sass',img: sass},
    {name: 'Redux',img: redux},
    {name: 'React Native',img: native},
    {name: 'Mongoose',img: mongoose},
    
    {name: 'Leaflet Map',img: leaflet},
    {name: 'Typescript',img: ts }

]

const tools=[
    {name: 'Linux',img: linux},
    {name: 'Git',img: git},
    {name: 'VSCode',img: vscode},
    {name: 'Chrome Dev Tool',img: chrome},
    {name: 'Android Studio',img: astudio},
    {name: 'Adobe Photoshop',img: ps},
    {name: 'Adobe Illustrator',img: ai},
    {name: 'Adobe Premiere Pro',img: premiere},
]

const Resume = () => {
    return (
        <section id="resume">
            <h1 className="text-danger port-font">Things I can offer</h1>
            <h2 className="my-5 ">My <span className="text-danger">Expertise</span></h2>
            <div data-aos="zoom-in" className="w-50 row m-auto fluid-container">
            {
                expertise.map(skill=> <Skill skill={skill}></Skill> )
            }
            </div>

            <h2 className="my-5 "><span className="text-danger">Comfortable</span> With</h2>
            <div data-aos="fade-right" className="w-50 row m-auto ">
            {
                comfortable.map(skill=> <Skill skill={skill}></Skill> )
            }
            </div>
            <h2 className="my-5 "><span className="text-danger">Familiar</span> With</h2>
            <div data-aos="flip-left" className="w-50 row m-auto ">
            {
                familiar.map(skill=> <Skill skill={skill}></Skill> )
            }
            </div>
            <h2 className="my-5 "><span className="text-danger">Tools</span> and others</h2>
            <div data-aos="flip-left" className="w-50 row m-auto ">
            {
                tools.map(skill=> <Skill skill={skill}></Skill> )
            }
            </div>

            <Education></Education>
        </section>
    );
};

export default Resume;
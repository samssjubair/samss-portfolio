import React from 'react';
import Particles from 'react-particles-js';
import particleConfig from '../../config/particle-config'
import AboutMe from '../Header/AboutMe/AboutMe';
import Navbar from '../Header/Navbar/Navbar';

const ParticleBackground = () => {
    return (
        <Particles params={particleConfig}>
            
        </Particles>
    );
};

export default ParticleBackground;
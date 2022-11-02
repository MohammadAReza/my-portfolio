import React from 'react';
import reza from '../../Asset/images/reza.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen ">
  <div className="hero-content flex-col lg:flex-row">
    <img src={reza} className="max-w-sm rounded-lg shadow-2xl" alt='' />
    <div className='px-5 text-center'>
      <h1 className="text-5xl font-bold">About Me!</h1>
      <h1 className="text-5xl font-bold">Front End Developer</h1>
      <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;
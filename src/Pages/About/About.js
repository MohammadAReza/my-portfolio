import React from 'react';
import reza from '../../Asset/images/reza.jpg'

const About = () => {
    return (
        <div class="hero min-h-screen px-12 ">
  <div class="hero-content flex-col lg:flex-row">
    <img src={reza} class="max-w-sm rounded-lg shadow-2xl" />
    <div className='px-14'>
      <h1 class="text-5xl font-bold">About Me!</h1>
      <h1 class="text-5xl font-bold">Front End Developer</h1>
      <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
      <button class="btn btn-primary">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default About;
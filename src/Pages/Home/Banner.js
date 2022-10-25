import React from 'react';
import reza from '../../Asset/images/reza.jpg'

const Banner = () => {
    return (
        <div class="hero min-h-screen ">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={reza} class="max-w-sm rounded-lg shadow-2xl" />
                <div className='px-12'>
                    <h1 class="text-4xl font-bold">Hello!!! I'm</h1>
                    <h2 class="text-5xl pt-6 font-bold uppercase">Mohammad A Reza</h2>
                    <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                    <button class="btn btn-primary">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
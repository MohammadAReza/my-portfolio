import React from 'react';
import reza from '../../Asset/images/reza.jpg'

const Banner = () => {
    return (
        <div className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={reza} className="max-w-sm rounded-lg shadow-2xl" alt=''/>
                <div className='px-12 text-center'>
                    <h1 className="text-4xl font-bold">Hello!!! I'm</h1>
                    <h2 className="text-5xl pt-6 font-bold uppercase ">Mohammad A Reza</h2>
                    <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi</p>
                    <button className="btn btn-primary">Download CV</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import Footer from '../Footer/Footer';

const Contact = () => {
    return (
        <div>
            <h1 className='text-6xl text-center py-2.5 pt-20'>Contact Me</h1>
            <div class="hero min-h-screen px-12">
                <div class="hero-content flex-col lg:flex-row-reverse">
                    <div class="text-center lg:text-left pl-20">
                        <h1 class="text-5xl font-bold">Why You Choose Me?</h1>
                        <p class="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Full Name</span>
                                </label>
                                <input type="text" placeholder="Full Name" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="Email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Subject</span>
                                </label>
                                <input type="text" placeholder="Type Your Subject" class="input input-bordered" />
                                <label class="label">
                                </label>
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Subject</span>
                                </label>

                                <textarea class="textarea textarea-primary" placeholder="Type Your Message"></textarea>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
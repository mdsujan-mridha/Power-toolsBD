import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const MyProfile = () => {

    return (
        <div>

            <div class="bg-slate-400 pb-6 mt-5">
                <h1 className="text-center text-4xl font-bold p-7">
                    Syeda Tamanna Sheme </h1>
                    <h3 className="text-xl"> Front-End Developer </h3>
                     <p> Contact mail : shemesyedatamanna@gmail.com </p>
                <p className='text-sm text-white'> I’m currently student of East West University. </p>
                <p className='text-sm text-justify mt-10'> I am an undergraduate student at East-West University's Department of Computer Science and Engineering, as well as an undergraduate teaching assistant. As a technology geek, I am dedicated to learning new technologies and putting them to use to tackle difficult challenges. I'm also a Front End Web Developer who is obsessed with creating error-free websites. I'm passionate about learning and sharing what I've learned with as many people as possible. I enjoy solving challenges in the real world. I am strategic and goal-oriented, and I constantly work for a common goal. I take pride in producing high-quality work and keeping effective communication. </p>
                <div className='grid grid-cols-1 gap-5 mt-5'>
                    <p>  Html <progress class="progress progress-success w-56" value="1000" max="100"></progress>   </p>
                    <p> Css <progress class="progress progress-success w-56" value="80" max="90"></progress> </p>
                    <p> JavaScript <progress class="progress progress-success w-56" value="80" max="100"></progress> </p>
                    <p> ReactJs <progress class="progress progress-success w-56" value="70" max="100"></progress> </p>
                    <p> NodeJs <progress class="progress progress-success w-56" value="60" max="100"></progress> </p>
                    <p> Java <progress class="progress progress-success w-56" value="70" max="100"></progress> </p>
                </div>
                <div className='mt-10'>
                    <h1> My Project Link </h1>
                     <div className='grid grid-cols-1'> 
                     <a className='mt-5 pt-5' href = "https://eduex-website.netlify.app/" > 1) EduEx </a>
                    <a className='mt-5 pt-5' href = "https://decibels-9e3b1.web.app/" > 2) Warehouse management </a>
                    <a className='mt-5 pt-5' href = "https://tazkily-website.netlify.app/" > 3) Tazkily_Website </a>
                     </div>
                   
                </div>
            </div>

        </div>
    );
};

export default MyProfile;
import React from 'react'
import yuvan from './yuvan.jpeg'
import { TypeAnimation } from 'react-type-animation';
const About = () => {
    return (
        <>
            <div class=" w-full p-4 text-center bg-white border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-purple-500">About</h5>
                <div class="flex items-center justify-center ">
                    <img src={yuvan} alt="Centered Image" class="w-1/4 rounded-2xl " />
                </div>
                <TypeAnimation
                    sequence={[
                        'IT graduate skilled in Java, HTML, CSS, JavaScript, React, and MySQL. Passionate about web development, currently working on projects to enhance my skills, and seeking an entry-level role to contribute and grow.',
                        1000,
                    ]}
                    wrapper="span"
                    speed={40}
                    style={{ color: 'white', marginTop: '30px' }}
                    className="text-sm sm:text-base lg:text-lg xl:text-xl inline-block w-64 sm:w-80 md:w-96 lg:w-[600px]"
                    repeat={0}
                />


            </div>

        </>
    )
}

export default About
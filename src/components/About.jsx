import React from 'react'
import yuvan from './yuvan.jpeg'
const About = () => {
    return (
        <>
            <div class=" w-full p-4 text-center bg-white border border-gray-200  shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
                <h5 class="mb-2 text-3xl font-bold text-gray-900 dark:text-white">About</h5>
                <div class="flex items-center justify-center ">
                    <img src={yuvan} alt="Centered Image" class="w-1/4 rounded-2xl " />
                </div>
                <p class="mb-5 text-base text-gray-500 sm:text-lg dark:text-gray-400 p-5">IT graduate skilled in Java, HTML, CSS, JavaScript, React, and MySQL. Passionate about web development, currently working on projects to enhance my skills, and seeking an entry-level role to contribute and grow.</p>

            </div>
        </>
    )
}

export default About
import React from 'react'

const Footer = () => {
    return (
        <>
           
                <footer class=" bg-white shadow dark:bg-gray-900">
                    <div class="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                        <div class="sm:flex sm:items-center sm:justify-between">
                        <span class="text-4xl font-bold bg-gradient-to-r from-sky-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">YUVAN SHANKAR</span>
                            <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                                <li>
                                   <a href="https://github.com/Yuvan12128"><i class="text-3xl fa-brands fa-github hover:underline me-4 md:me-6"></i></a>
                                </li>
                                <li>
                                   <a href="https://www.linkedin.com/in/yuvan12128/"><i class="text-3xl fa-brands fa-linkedin hover:underline me-4 md:me-6"></i></a> 
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/yuvan.shankar.313371/"><i class="text-3xl fa-brands fa-square-facebook hover:underline me-4 md:me-6"></i></a>
                                </li>
                                <li>
                                    <a href="https://wa.me/qr/6FRPFU43YTJSL1" ><i class="text-3xl fa-brands fa-whatsapp hover:underline"></i></a>
                                </li>
                            </ul>
                        </div>
                        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2025 <a href="https://github.com/Yuvan12128" class="hover:underline">Yuvan Shankar™</a>. All Rights Reserved.</span>
                    </div>
                </footer>
         

        </>
    )
}

export default Footer
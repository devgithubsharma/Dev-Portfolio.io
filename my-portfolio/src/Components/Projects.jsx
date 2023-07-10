import React from 'react'
import hacks from "../assets/hacka.png"
import port from "../assets/port.png"
import typ from "../assets/typ.png"
import socio from "../assets/socio.png"
import blog from "../assets/ds-blog.png"

const Projects = () => {
  return (
    <div name='projects' className='w-full md:h-screen text-gray-100 bg-[#0a192f]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-0'>
                <p className='text-2xl font-bold inline border-b-4 text-gray-100 border-rose-600'>Projects</p>
                <p className='py-1'>Check out some of my Projects and Experiences</p>
            </div>
            
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-2'>
                {/*Grid Item */}
                <div style={{background:`url(${typ})`,objectFit:"cover", backgroundSize:"cover",width:"100%"}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    {/*Hover Effect */}
                    <div className='opacity-0 group-hover:opacity-100 cursor-pointer'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Typometer Website
                        </span>
                        <div className='pt-8 text-center '>
                            <a href='https://typometer-two.vercel.app/'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/devgithubsharma/Typometer'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{background:`url(${socio})`,objectFit:"cover", backgroundSize:"cover",width:"100%"}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 cursor-pointer'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SOCIAL-DEV

                        </span>
                        <div className='pt-8 text-center '>
                            <a href='https://social-dev-eta.vercel.app/'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/devgithubsharma/SOCIAL-DEV'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{background:`url(${blog})`,objectFit:"cover", backgroundSize:"cover",backgroundPosition:"center center",width:"100%"}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 cursor-pointer'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            DS BLOG

                        </span>
                        <div className='pt-8 text-center '>
                            {/* <a href='/'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a> */}
                            <a href='https://github.com/devgithubsharma/DS-Blogs'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{background:`url(${port})`,objectFit:"cover", backgroundSize:"cover",backgroundPosition:"center center",width:"100%"}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    <div className='opacity-0 group-hover:opacity-100 cursor-pointer'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Portfolio Website
                        </span>
                        <div className='pt-8 text-center '>
                            <a href='https://portfolioreactapp.netlify.app/'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href='https://github.com/devgithubsharma/Portfolio_website'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Source Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{background:`url(${hacks})`,objectFit:"cover", backgroundSize:"cover",backgroundPosition:"center center",width:"100%"}} className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    <div className='opacity-0 group-hover:opacity-100 cursor-pointer'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            SWOC Hackathon

                        </span>
                        <div className='pt-8 text-center '>
                            
                            <a href='https://certificate.givemycertificate.com/c/29a3e52f-994e-4803-befb-f81d535a576c'>
                                <button className='text-center m-2 rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg'>Certificate</button>
                            </a>
                        </div>
                    </div>
                </div>


            </div>
        </div>
      
    </div>
  )
}

export default Projects

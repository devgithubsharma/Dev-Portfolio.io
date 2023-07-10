import React from 'react'

import Javascript from "../assets/Javascript.png"
import Css from "../assets/css.png"
import Express from "../assets/express.png"
import Githubs from "../assets/githubs.png"
import Html from "../assets/html.png"
import Mongo from "../assets/mongo.png"
import Mysql from "../assets/mysql.png"
import Node from "../assets/node.png"
import Postman from "../assets/postman.png"
import Python from "../assets/python.png"
import Reacts from "../assets/react.png"
import Tailwind from "../assets/tailwind.png"

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-100'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        <div>
            <p className='text-2xl font-bold inline border-b-4 border-rose-600'>Skills</p>
            <p className='py-2'>These are the Technology stacks, I've worked with !</p>
        </div>

        <div className='w-full grid grid-cols-3 sm:grid-cols-4 gap-2 text-center py-6'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Html} alt='' />
                <p className='my-4    font-bold'>HTML</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Css} alt='' />
                <p className='my-4   font-bold'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16]   hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Javascript} alt='' />
                <p className='my-4  font-bold'>JAVASCRIPT</p>
            </div>
            <div className='shadow-md shadow-[#040c16]   hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Reacts} alt='' />
                <p className='my-4  font-bold'>REACT</p>
            </div>
            <div className='shadow-md shadow-[#040c16]   hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt='' />
                <p className='my-4  font-bold'>NODE</p>
            </div>
            <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Express} alt='' />
                <p className='my-4  font-bold'>EXPRESS</p>
            </div>
            <div className='shadow-md shadow-[#040c16]   hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mongo} alt='' />
                <p className='my-4  font-bold'>MONGODB</p>
            </div>
            <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt='' />
                <p className='my-4  font-bold'>PYTHON</p>
            </div>
            <div className='shadow-md shadow-[#040c16]  hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Tailwind} alt='' />
                <p className='my-4  font-bold'>TAILWIND CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Githubs} alt='' />
                <p className='my-4  font-bold'>GITHUB</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Mysql} alt='' />
                <p className='my-4  font-bold'>MYSQL</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Postman} alt='' />
                <p className='my-4  font-bold'>POSTMAN</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Skills


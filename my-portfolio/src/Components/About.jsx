import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-200'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-rose-600'>About</p>
                </div>
                <div></div>
            </div>
            <div className='max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8'>
                <div className='sm:text-right text-3xl text-yellow-400'>
                    <p>Hey! I am Dev Sharma, a self taught programmer who is passionate for Data Structure and Algorithms,
                        learning new tech stacks and programming languages.
                    </p>
                </div>
            
            <div>
                <p className='text-teal-100'>
                I finding myself to be confident and competent enough in programming languages such as Python, Javascript, and Java. 
I have an experience of building decent projects in Web Development domain and worked on both frontend and backend tech stacks. <br/><br/>
Apart from that I have a great focus and have so far been able to better my skills with a lot of practice. Moreover, I really like solving problems on Data structures and algorithms and am interesting in facing challenging problems.

                </p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default About

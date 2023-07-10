import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
      <form method='POST' action='https://getform.io/f/6e25d0a6-daff-4de9-bd4b-dd1a4f6cc107' className='flex flex-col max-w-[600px] w-full'>
        <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-rose-600 text-gray-100'> Contact</p>
            <p className='text-gray-100 py-4 text-2xl'>Interested to Know more ? <br/> Contact me on - devsharmabsr03@gmail.com</p>
        </div>
        <input className='bg-[#eeeff3] p-2' type="text" placeholder='Name' name='name'></input>
        <input className='bg-[#eeeff3] p-2 my-4' type="email" placeholder='Email' name='email'></input>
        <textarea className='bg-[#eeeff3] p-2' rows='10' placeholder='Message' name='message'></textarea>
        <button className='text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center '>
            Let's Collaborate
        </button>   
      </form>
    </div>
  )
}

export default Contact

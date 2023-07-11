import React, { useEffect, useRef, useState } from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {

    const [stage, changeStage] = useState(1);
    const per = useRef();
    const profile = useRef();
    useEffect(() => {
      var id = setInterval(() => {
        var tmp = per.current.innerText;
        var cur = parseInt(tmp);
        cur = cur + 1;
        per.current.innerText = Math.min(cur, 100);
        if (cur >= 100) {
          clearInterval(id);
          changeStage(3);
        }
      }, 60);
    }, []);
    
   
    useEffect(() => {
      const pArray = [
        "Software Engineer",
        "Web Developer",
      "Problem Solver",
      "AI/ML Enthusiasts"
      
  
      ];
      var idx = 0,
        cur = 0,
        delay = 0,
        ck = 0;
  
      const intervalId = setInterval(() => {
        if(delay === 10) delay = 0
  
        if(delay > 0) {
          delay += 1
          return
        }
        
        if (idx === -1 && ck === 1) {
          cur = cur + 1;
          idx = 1;
          ck = 0;
          if (cur === pArray.length) cur = 0;
          profile.current.innerText = "";
        } else if (idx === pArray[cur].length) {
          ck = 1;
          idx = idx - 1;
          delay = 1
        }
  
        let tmpString = pArray[cur].substring(0, idx + 1);
        profile.current.innerText = tmpString;
        if (ck === 0) idx++;
        else idx--;
      }, 100);
      return () => clearInterval(intervalId);
    }, []);

  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
        {/* Container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
            <p className='text-pink-400 text-6xl font-bold'>Hi, I am Dev Sharma</p>
            <h1 className='text-4xl sm:text-6xl font-bold text-[#ccd6f6]'></h1>
            {/* <h2 className='text-4xl sm:text-6xl font-bold text-sky-300' >
                I am a full Stack Developer.</h2> */}
            <div
                className="text-[#0a192f] z-0 inline font-bold whitespace-nowrap "
                ref={per}
              ></div>
            <div
                className="text-sky-300 text-5xl profile-text "
                ref={profile}
              ></div>

            <p className='text-stone-300 text-2xl py-4 max-w-[700px]'> 
I am a Tech Enthusiasts with good code habits, have a passion for problem solving 
and to learn new tech stacks with utmost zeal.
</p>
        <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex justify-center items-center hover:bg-pink-600 hover:border-pink-600'>View Work 
                <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
                </span>
                
            </button>
        </div>

        </div>
        
      
    </div>
  )
}

export default Home

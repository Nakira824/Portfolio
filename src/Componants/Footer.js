import React from 'react';
import { GrLinkedinOption, GrMail, GrGithub } from "react-icons/gr";
import { BiSolidPhoneCall } from "react-icons/bi";

function Footer() {
  return (
    <div className='w-screen bg-black'>
      <div className='flex flex-row p-2 justify-around'>

        <a href='https://in.linkedin.com/in/nakira-ashworth-598312170' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrLinkedinOption className="text-white" />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>Linkedin</span>
        </a>

        <a href='mailto:nakiraashworth@gmail.com' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrMail className="text-white" />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>nakiraashworth@gmail.com</span>
        </a>

        <a href='tel:6152935677' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <BiSolidPhoneCall className="text-white" />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>6152935677</span>
        </a>

        <a href='https://github.com/Nakira824' target='_blank' rel='noopener noreferrer' className='text-lg flex flex-row text-violet-300'>
          <div className='h-30 w-30 rounded-full flex justify-center items-center bg-violet-400'>
            <GrGithub className="text-white" />
          </div>
          <span className='text-white ml-1 mt-[0.1rem]'>Github</span>
        </a>

      </div>
    </div>
  );
}

export default Footer;
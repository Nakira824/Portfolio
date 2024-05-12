import React from 'react'
import { Styles } from '../utils/Style';
import { projects } from '../Constants';
import Tilt from 'react-parallax-tilt'
import {SiGithub, SiVercel} from 'react-icons/si'

function Projects() {
  return (
    <div>
        <div className='pt-3 mt-4 ' id='Projects'>
           <span className={Styles.sectionHeadText}>
                Projects
            </span> 
            <hr className='w-[35%]' />
    <div className={Styles.sectionText} >
    
    This section showcases examples of my skills and work. Each project is accompanied by a brief description, giving you insight into the technologies used and the problem solved. Dive in to see firsthand the quality and diversity of my portfolio.
   
   
   </div>
   
   </div>

    <div className='flex flex-wrap p-8 justify-evenly items-center' >
        {projects.map((project, index) =>
        (
            <Tilt key={`${project.name}-${index}`} className=' w-[300px] h-[500px] flex flex-col justify-evenly shadow-2xl m-10 
            items-center hover:shadow-2xl hover:shadow-violet-400 shadow-pink-300 p-3 rounded-xl 
              border-2 border-violet-900 ' >
                <div>
                  <div className='flex justify-center items-center mb-3'>

                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                    flex justify-center items-center '>
                      <a href={project.source_deploy_link} target='_blank' rel='noopener noreferrer'>
                        <SiVercel className=" text-3xl font-bold text-violet-600 " ></SiVercel>

                      </a>

                    </div>
                    <div className='h-[40px] w-[40px] m-3 bg-slate-50 rounded-full shadow-lg shadow-violet-500
                    flex justify-center items-center '>
                      <a href={project.source_code_link} target='blank' >
                        <SiGithub className=" text-3xl font-bold text-violet-600 " ></SiGithub>
                        </a>
                  </div>

                </div>
                <img className='h-[200px] self-center w-[250px] border-2 border-pink-200 rounded-2xl ' src={project.
                image} alt={project.name} />

<div className='text-2xl text-violet-600 font-extrabold text-center'>
  {project.name}
</div>

                <div className=' text-center ' >
                  <span className='text-orange-500' >
                    {project.description}
                  </span>
                </div>
                </div>
            </Tilt>    
      ))}
    </div>
    </div>
  );
}

export default Projects;

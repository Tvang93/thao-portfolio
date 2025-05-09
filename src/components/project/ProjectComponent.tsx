'use client'

import React, { useState } from 'react'
import ProjectDescriptionComponent from './ProjectDescriptionComponent';

const ProjectComponent = () => {
    const [activeProject, setActiveProject] = useState<number>(0);

  return (
    <div className='grid grid-cols-8 bg-[rgb(255,255,255,0.2)] rounded-2xl'>
        <div className='col-span-2 flex flex-col py-2 px-3 justify-center gap-5'>
            <div className='text-center bg-[rgb(255,255,255,0.6)] rounded-lg hover:cursor-pointer' onClick={()=>setActiveProject(0)}>MatchPoint</div>
            <div className='text-center bg-[rgb(255,255,255,0.6)] rounded-lg hover:cursor-pointer' onClick={()=>setActiveProject(1)}>Pokemon Search Application</div>
            <div className='text-center bg-[rgb(255,255,255,0.6)] rounded-lg hover:cursor-pointer' onClick={()=>setActiveProject(2)}>Tip Calculator</div>
            <div className='text-center bg-[rgb(255,255,255,0.6)] rounded-lg hover:cursor-pointer' onClick={()=>setActiveProject(3)}>All For One</div>
        </div>
        <ProjectDescriptionComponent activeState={activeProject}/>
    </div>
  )
}

export default ProjectComponent
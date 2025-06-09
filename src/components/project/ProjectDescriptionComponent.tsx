import React from 'react'
import ProjectData from '../../projectData.json'

interface IProp {
    activeState: number
}

const ProjectDescriptionComponent = (IProp: IProp) => {
    const {activeState} = IProp

  return (
    <div className='col-span-6 flex flex-col py-2 pe-3'>
        <div className='my-1 ps-3'>
            <img src={ProjectData[activeState].ProjectImage} className='h-40 w-full object-cover rounded-xl' alt={`${ProjectData[activeState].Project} Title`} />
        </div>
        <div className='flex flex-col gap-1 ps-3'>
            <h1 className='font-bold text-xl'>{ProjectData[activeState].Project}</h1>
            <p className='h-30'>{ProjectData[activeState].ProjectDescription}</p>
            <a href={ProjectData[activeState].ProjectLink}  target="_blank" rel="noopener noreferrer" className='text-blue-600'>{ProjectData[activeState].ProjectLink}</a>
        </div>
    </div>
  )
}

export default ProjectDescriptionComponent
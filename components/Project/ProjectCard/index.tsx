import React from 'react';
import { ProjectCardProps } from '../../../interfaces';

const ProjectCard: React.FC<ProjectCardProps> = ({ url, img, title, desc, stack }) => {
  return (
    <div className='h-[75vh] flex flex-col overflow-y-auto scrollbar'>
      <a className='h-full' href={url}>
        <img className='rounded-xl h-[35vh] w-full' src={img} alt='project wave' />
        <div className='flex-1 pt-5'>
          <h4 className='text-turqoise-cst text-center'>{title}</h4>
          <div className='justify-between h-full'>
            <p className='pt-5 text-xl'>{desc}</p>
            <p className='pt-4 pb-10 text-xl'>
              <span className='text-orange-cst'>Stack: </span>
              {stack}
            </p>
          </div>
        </div>
      </a>
    </div>
  );
};
export default ProjectCard;

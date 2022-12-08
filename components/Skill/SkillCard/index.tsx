import React from 'react';
import { ArticleProps } from '../../../interfaces';

const SkillCard: React.FC<ArticleProps> = ({ url, img, title }) => {
  return (
    <div className='flex justify-center items-center'>
      <a className='bg-black-1' href={url}>
        <div className='w-[100px] h-[150px] flex flex-col items-center bg-black-3 p-4 mb-2 mr-1'>
          <div className='w-[72px] h-[72px]'>
            <img className='w-full h-full object-contain' src={img} />
          </div>
          <p className='pt-3 text-center'>{title}</p>
        </div>
      </a>
    </div>
  );
};

export default SkillCard;

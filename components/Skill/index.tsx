import React from 'react';
import { skills } from '../../data';
import SkillCard from './SkillCard';

const Skill: React.FC = () => {
  return (
    <div
      id='skill'
      className='flex flex-col h-screen w-full py-[2.5rem] sm:py-[3rem] scroll-mt-10 overflow-y-auto scrollbar'>
      <h3 className='text-orange-cst font-bold'>SKILL</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-5 max-h-screen  pt-[2rem] sm:pt-[3rem]'>
        {skills.map((skill) => {
          return <SkillCard url={skill.url} img={skill.img} title={skill.title} />;
        })}
      </div>
    </div>
  );
};
export default Skill;

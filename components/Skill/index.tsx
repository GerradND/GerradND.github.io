import React from 'react';
import { skills } from '../../data';
import SkillCard from './SkillCard';

const Skill: React.FC = () => {
  return (
    <section
      id='skill'
      className='flex flex-col h-screen w-full py-[2.5rem] sm:py-[3rem] scroll-mt-10'>
      <h3 className='text-orange-cst font-bold pb-[2rem] sm:pb-[3rem]'>SKILL</h3>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 items-center gap-5 max-h-screen   overflow-y-auto scrollbar'>
        {skills.map((skill) => {
          return (
            <SkillCard url={skill.url} img={skill.img} title={skill.title} key={skill.title} />
          );
        })}
      </div>
    </section>
  );
};
export default Skill;

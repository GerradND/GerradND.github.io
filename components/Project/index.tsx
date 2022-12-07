import React from 'react';
import { projects } from '../../data';
import ProjectCard from './ProjectCard';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

const Project: React.FC = () => {
  const swiper = useSwiper();
  return (
    <section
      id='project'
      className='flex flex-col h-full w-full py-[2.5rem] sm:py-[3rem] scroll-mt-10'>
      <h3 className='text-orange-cst font-bold'>PROJECTS</h3>
      <div className='h-full pt-[2rem] sm:pt-[3rem]'>
        <Swiper
          slidesPerView='auto'
          spaceBetween={20}
          loop={true}
          loopFillGroupWithBlank={true}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false
          }}
          breakpoints={{
            768: {
              slidesPerView: 2,
              spaceBetween: 30
            }
          }}
          pagination={{
            clickable: true
          }}
          modules={[Pagination, Navigation, Autoplay]}
          className='mySwiper'>
          {projects.map((project) => {
            return (
              <SwiperSlide key={project.title}>
                <ProjectCard
                  key={project.title}
                  url={project.url}
                  img={project.img}
                  title={project.title}
                  desc={project.description}
                  stack={project.stack}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};
export default Project;

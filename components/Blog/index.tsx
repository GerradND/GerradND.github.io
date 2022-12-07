import React from 'react';
import { articles } from '../../data';
import Article from '../Article';

const Blog: React.FC = () => {
  return (
    <section id='blog' className='mx-auto scroll-mt-10 py-[2.5rem] sm:py-[3rem]'>
      <h3 className='text-orange-cst font-bold'>BLOGS</h3>
      <div className='pt-[2rem] grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        {articles.map((article) => {
          return (
            <Article key={article.url} url={article.url} img={article.img} title={article.title} />
          );
        })}
      </div>
    </section>
  );
};
export default Blog;

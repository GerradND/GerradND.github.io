import Image from 'next/image';
import React from 'react';
import { ArticleProps } from '../../interfaces';

const Article: React.FC<ArticleProps> = ({ url, img, title }) => {
  return (
    <article
      id='blog'
      className='w-full flex flex-col rounded-lg transition ease-in-out delay-100 duration-200 hover:bg-turqoise-cst'>
      <a href={url}>
        <img className='rounded h-[30vh] w-full object-cover' src={img} alt={title} />
        <p className='p-5 text-center font-bold'>{title}</p>
      </a>
    </article>
  );
};

export default Article;

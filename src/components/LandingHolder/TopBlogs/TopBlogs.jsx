import { useQuery } from '@tanstack/react-query';
import React from 'react'
import BlogsCard from '../../common/BlogsCard/BlogsCard';
import ViewMoreBtn from '../../common/ViewMoreBtn/ViewMoreBtn';
import { usequery } from '../../../core/services/api/reactQuery/useQuery';

const TopBlogs = () => {

    const data = usequery("TopBlogs");
    const {news} = data ? data : [];
    const res = news?.slice(0,3);

  return (
    <div className="space-y-12">
      <span className="tablet:text-4xl text-2xl mx-auto block text-center font-DanaFaNum-700">
      بلاگ های برتر هفته
      </span>
      <div className="wrapper grid tablet:grid-cols-12 grid-cols-4 gap-8">
        {res?.map((item, index) => {
          return <BlogsCard item={item} key={index} />;
        })}
      </div>
      <div className="mx-auto w-fit">
        <ViewMoreBtn link="/articles" />
      </div>
    </div>
  )
}

export default TopBlogs
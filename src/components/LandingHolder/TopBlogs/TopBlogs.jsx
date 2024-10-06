import { useQuery } from '@tanstack/react-query';
import React from 'react'
import BlogsCard from '../../common/BlogsCard/BlogsCard';
import ViewMoreBtn from '../../common/ViewMoreBtn/ViewMoreBtn';

const TopBlogs = () => {

    const { data } = useQuery({
        queryKey: ["TopBlogs"],
    });
    
    data ? console.log(data) : false ;

  return (
    <div className="space-y-12">
      <span className="tablet:text-4xl text-2xl mx-auto block text-center">
      بلاگ های برتر هفته
      </span>
      <div className="wrapper flex justify-around flex-wrap items-center gap-6">
        {data?.map((item, index) => {
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
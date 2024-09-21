import React, { useEffect, useRef } from 'react';
import { Bar, BarChart, XAxis, YAxis, Tooltip } from "recharts";

interface PostsPerMonthProps {
  posts: any[];
}

const PostsPerMonth = ({ posts }: PostsPerMonthProps) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  const postsPerMonth = posts.reduce((acc, post) => {
    const month = post.data.pubDate.getMonth();
    acc[months[month]] = (acc[months[month]] || 0) + 1;
    return acc;
  }, {});

  const data = months.map(month => ({
    name: month,
    posts: postsPerMonth[month] || 0
  }));

  return (
    <div>
      <span className='text-2xl font-bold text-center flex justify-center items-center'>Posts per Month</span>
      <BarChart width={600} height={300} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="posts" fill="#8884d8" />
      </BarChart>
    </div>
  );
};

export default PostsPerMonth;

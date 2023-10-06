'use client';
import { useState, useEffect } from 'react';
import { getAllPosts } from '@/services/post';

const PostList = () => {
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    getAllPosts()
      .then((res) => {
        setPostList(res.posts);
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="flex flex-col space-y-12 items-center">
      {postList &&
        postList.map((post, index) => (
          <div
            key={index}
            className="group text-white flex justify-between border-4 border-white rounded-lg hover:bg-green-600 hover:border-green-600 duration-300 cursor-pointer"
          >
            <div>
              {/*eslint-disable-next-line @next/next/no-img-element*/}
              <img src="/treasure.png" alt="treasure" className="w-36" />
            </div>
            <div className="flex flex-col space-y-4 justify-center px-16 my-6 border-1 border-white group-hover:border-green-600 duration-300">
              <h2 className="text-xl font-bold uppercase">{post.title}</h2>
              <p className="text-md capitalize">{post.content}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default PostList;

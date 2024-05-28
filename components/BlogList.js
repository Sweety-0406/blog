
import { useState } from 'react';
import Link from 'next/link';
import { formatDate } from '@/pages';  

export default function BlogList({ posts }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 5; // Number of posts to display per page

  // Calculate the index of the first and last post to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='lg:mx-10'>
      <div className='text-3xl font-bold ml-1'>
        Blogs
      </div>
      <ul className='w-full   grid grid-cols-1gap-4'>
        {currentPosts.map(({ id, title, date, summary, image,index }) => (
          <div key={index} className=''>
            <li key={id} className='mb-3 grid grid-cols-6 border-[1px] border-sky-300 rounded-xl p-4 flex justify-between'>
              <div className='col-span-4 sm:col-span-5 lg:col-span-5 xl:col-span-5'>
                <Link href={`/posts/${id}`} className='text-2xl text-yellow-300 '>
                  {title}
                </Link>
                <br />
                <small  className='text-sky-300'>{ formatDate(date)}</small>
                <p>{summary}</p>
              </div>
              <div className=' col-span-2 sm:col-span-1 lg:col-span-1 xl:col-span-1'>
                <img src={image} alt="image" className='w-28 h-28  rounded-full'/>
              </div>
            </li>
          </div>
        ))}
      </ul>
      {/* Pagination */}
      <div className="mt-4">
        <ul className="flex justify-center">
          {Array.from({ length: Math.ceil(posts.length / postsPerPage) }, (_, index) => (
            <li key={index} className={`${currentPage === index + 1 ? 'font-bold text-black bg-yellow-300 w-7 h-7 rounded-full flex items-center justify-center' : ''} cursor-pointer mx-2`} onClick={() => paginate(index + 1)}>
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}






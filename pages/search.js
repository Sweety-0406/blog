
import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/BlogList';
import Profile from '../components/Profile';
import Layout from './layout';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function SearchResults({ allPostsData }) {
  const router = useRouter();
  const  {q}  = router.query;
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (q && allPostsData) {
      const results = allPostsData.filter(post =>
        post.blogType.toLowerCase().includes(q.toLowerCase())
      );
      setSearchResults(results);
    }
  }, [q, allPostsData]);

  // Convert Date objects to string representations
  const formattedSearchResults = searchResults.map(post => ({
    ...post,
    date: post.date.toString(),
  }));

  return (
    <Layout allPostsData={formattedSearchResults}>
       <Profile />
       <div className='w-full text-white'>
        {formattedSearchResults.length==0 ? (
            <div className='lg:mx-10 '>
                <div className='grid grid-cols-7'>
                    <div className='hidden md:block col-span-4'>
                        <img src="/images/no-blog.jpg" alt="" />
                    </div>
                    <div className='col-span-7 md:col-span-3 md:mt-28 xl:mt-40'>
                        <div className='items-center flex flex-col '>
                           <div className='text-xl xl:text-3xl font-semibold text-sky-300'>
                            NO BLOGS
                           </div>
                           <div className='text-sm xl:text-lg'>
                           No Blogs Are Found Related To Your Search
                           </div>
                           <button onClick={()=>router.push("/")} className='bg-sky-600 mt-4 rounded-full p-1 border-2 border-sky-700 hover:bg-sky-400'>Go To Home</button>
                        </div>
                    </div>
                </div>
            </div>
        ):(
            <BlogList posts={formattedSearchResults} />
        )}
        {/* <BlogList posts={formattedSearchResults} /> */}
       </div>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData().map(post => ({
    ...post,
    // Ensure date is converted to string representation
    date: typeof post.date === 'string' ? post.date : post.date.toISOString()
  }));

  return {
    props: {
      allPostsData
    }
  };
}


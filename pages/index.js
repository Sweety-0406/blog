


// import { getSortedPostsData } from '../lib/posts';
// import BlogList from '../components/BlogList';
// import Profile from '../components/Profile';
// import Layout from './layout';

// export function formatDate(dateString) {
//   const options = { year: 'numeric', month: 'long', day: 'numeric' };
//   return new Date(dateString).toLocaleDateString('en-US', options);
// }

// export default function Home({ allPostsData }) {
//   // Convert Date objects to string representations
//   const formattedPosts = allPostsData.map(post => ({
//     ...post,
//     date: post.date.toString(),
//   }));

//   return (
//     <Layout allPostsData={formattedPosts}>
//        <Profile />
//        <div className='w-full text-white'>
//         <BlogList posts={formattedPosts} />
//        </div>
//     </Layout>
//   );
// }

// export async function getStaticProps() {
//   const allPostsData = getSortedPostsData().map(post => ({
//     ...post,
//     // Ensure date is converted to string representation
//     date: typeof post.date === 'string' ? post.date : post.date.toISOString()
//   }));

//   return {
//     props: {
//       allPostsData
//     }
//   };
// }



import { getSortedPostsData } from '../lib/posts';
import { useState } from 'react';
import Layout from './layout';
import Profile from '../components/Profile';
import BlogList from '../components/BlogList';
import Pagination from '../components/Pagination'; // Import Pagination component

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Home({ allPostsData }) {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 15; 

  // Calculate the index of the first and last post to display on the current page
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = allPostsData.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <Layout allPostsData={allPostsData}>
      <Profile />
      <div className='w-full text-white'>
        <BlogList posts={currentPosts} />
      </div>
      {/* Pagination */}
      <Pagination
        postsPerPage={postsPerPage}
        totalPosts={allPostsData.length}
        paginate={paginate}
        currentPage={currentPage}
      />
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


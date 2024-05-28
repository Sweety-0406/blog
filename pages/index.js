


import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/BlogList';
import Profile from '../components/Profile';
import Layout from './layout';

export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export default function Home({ allPostsData }) {
  // Convert Date objects to string representations
  const formattedPosts = allPostsData.map(post => ({
    ...post,
    date: post.date.toString(),
  }));

  return (
    <Layout allPostsData={formattedPosts}>
       <Profile />
       <div className='w-full text-white'>
        <BlogList posts={formattedPosts} />
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


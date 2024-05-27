import { getSortedPostsData } from '../lib/posts';
import BlogList from '../components/BlogList';
import Navbar from '@/components/navbar';
import Profile from '@/components/Profile';

export default function Home({ allPostsData }) {
  // Convert Date objects to string representations
  const formattedPosts = allPostsData.map(post => ({
    ...post,
    // Convert Date to ISO string
    date: typeof post.date === 'string' ? post.date : post.date.toISOString()
  }));

  return (
    <div>
       <Navbar />  
       <Profile />
       <div className='w-full  text-white '>
        <BlogList posts={formattedPosts} />
       </div>
    </div>
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

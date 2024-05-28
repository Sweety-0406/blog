import { getPostData, getAllPostIds } from '../../lib/posts';
import BlogPost from '../../components/BlogPost';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import Layout from '../layout';
import { formatDate } from '..';

export default function Post({ postData }) {
    return (
        <Layout>
          <div className='text-white mt-10 mx-5 lg:mx-[10%]  '>
            <h1 className='text-4xl font-bold text-white'>{postData.title}</h1>
            <div className='border-2 rounded-xl mt-2 mb-1'>
              <img src={postData.image} alt="image" className='flex aspect-video lg:w-full items-center rounded-xl justify-center p-0' />
            </div>
            <p className='text-blue-300'>{formatDate(postData.date)}</p>
            <p className='text-blue-300'> {postData.author}</p>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
          </div>
        </Layout>
      );
    
}

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.slug);
  return {
    props: {
      // Convert Date object to string representation
      postData: {
        ...postData,
        date: postData.date.toISOString()
      }
    }
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false
  };
}

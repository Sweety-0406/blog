import { getPostData, getAllPostIds } from '../../lib/posts';
import BlogPost from '../../components/BlogPost';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

export default function Post({ postData }) {
    return (
        <div>
          <h1>{postData.title}</h1>
          <p>{postData.date}</p>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{postData.content}</ReactMarkdown>
        </div>
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

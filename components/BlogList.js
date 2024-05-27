import Link from 'next/link';

export default function BlogList({ posts }) {
  return (
    <ul className='w-full lg:w-[80%]   lg:mr-[15%]'>
      {posts.map(({ id, title, date, summary }) => (
        <li key={id} className='mb-3 border-[1px] border-sky-300 rounded-xl p-4'>
          <Link href={`/posts/${id}`} className='text-2xl'>
            {title}
          </Link>
          <br />
          <small>{date}</small>
          <p>{summary}</p>
        </li>
      ))}
    </ul>
  );
}

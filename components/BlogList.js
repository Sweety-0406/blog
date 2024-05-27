import Link from 'next/link';
import { formatDate } from '@/pages';  


export default function BlogList({ posts }) {

  return (
    <div className='lg:mx-10'>
      <div className='text-3xl font-bold ml-1'>
        Blogs
      </div>
      <ul className='w-full   grid grid-cols-1 md:grid-cols-2 gap-4'>
        {posts.map(({ id, title, date, summary, image }) => (
          <div>
            <li key={id} className='mb-3 border-[1px] border-sky-300 rounded-xl p-4 flex justify-between'>
              <div>
              <Link href={`/posts/${id}`} className='text-2xl text-yellow-300 '>
                {title}
              </Link>
              <div className='hidden md:flex lg:hidden justify-center  items-center'>
                <img src={image} alt="image" className='w-28 h-28 rounded-full'/>
              </div>
              <br />
              <small  className='text-sky-300'>{ formatDate(date)}</small>
              <p>{summary}</p>
              </div>
            <div className='block md:hidden lg:block'>
              <img src={image} alt="image" className='w-28 h-28 rounded-full'/>
            </div>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
}




// import Link from 'next/link';
// import { formatDate } from '@/pages';  


// export default function BlogList({ posts }) {

//   return (
//     <div className='lg:mx-10'>
//       <div className='text-3xl font-bold ml-1 text-yellow-300'>
//         Blogs
//       </div>
//       <ul className='w-full   grid grid-cols-1 md:grid-cols-2 gap-4'>
//         {posts.map(({ id, title, date, summary, image }) => (
//           <div>
//             <li key={id} className='mb-3 border-[1px] border-sky-300 rounded-xl p-4 flex justify-between'>
//               <div>
//               <Link href={`/posts/${id}`} className='text-2xl '>
//                 {title}
//               </Link>
//               <div className='hidden md:flex lg:hidden justify-center  items-center'>
//                 <img src={image} alt="image" className='w-28 h-28 rounded-full'/>
//               </div>
//               <br />
//               <small  className='text-sky-300'>{ formatDate(date)}</small>
//               <p className='text-yellow-300 '>{summary}</p>
//               </div>
//             <div className='block md:hidden lg:block'>
//               <img src={image} alt="image" className='w-28 h-28 rounded-full'/>
//             </div>
//             </li>
//           </div>
//         ))}
//       </ul>
//     </div>
//   );
// }

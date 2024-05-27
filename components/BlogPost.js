export default function BlogPost({ post }) {
    return (
      <article>
        <h1>{post.title}</h1>
        <div>{post.date}</div>
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    );
  }
  
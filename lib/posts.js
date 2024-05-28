import fs from 'fs';
import path from 'path';
import parseMD from 'parse-md';

const postsDirectory = path.join(process.cwd(), 'content/posts');

export function getSortedPostsData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { metadata, content } = parseMD(fileContents);
    return {
      id,
      ...metadata,
      // date: metadata.date instanceof Date ? metadata.date.toISOString() : metadata.date, // Ensure the date is serialized to a string
      content,
    };
  });

  return allPostsData.sort((a, b) => {
    return new Date(b.date) - new Date(a.date);
  });
}

export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map(fileName => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, '')
      }
    };
  });
}

export function getPostData(id) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { metadata, content } = parseMD(fileContents);
  return {
    id,
    content,
    ...metadata
  };
}

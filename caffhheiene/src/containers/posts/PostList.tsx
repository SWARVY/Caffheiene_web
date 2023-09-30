import PostItem from '@/containers/posts/PostItem';
import { getSortedPostData } from '@/utils/getPostData';

export default function PostList() {
  const posts = getSortedPostData();

  return (
    <ul className="grid gap-8">
      {posts.map((post, idx) => (
        <PostItem key={idx} id={idx} post={post} />
      ))}
    </ul>
  );
}

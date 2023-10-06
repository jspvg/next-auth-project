import PostList from '@/components/PostList';
import Link from 'next/link';

export default function Posts() {
  return (
    <main className="bg-black flex flex-col justify-center items-center space-y-8">
      <Link href="/" className="text-blue-300 hover:underline uppercase">
        Back to homepage
      </Link>
      <p className="text-white">All Posts:</p>
      <PostList />
    </main>
  );
}

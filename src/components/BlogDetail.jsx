import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import matter from "gray-matter";

const BlogDetail = () => {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadPost = async () => {
      try {
        // Try to import the specific markdown file
        const markdownModule = await import(`../posts/${slug}.md?raw`);
        const fileContent = markdownModule.default;
        const { data, content } = matter(fileContent);

        setPost({
          title: data.title,
          date: data.date,
          content: content,
        });
      } catch (err) {
        console.error("Failed to load post:", err);
        setError("Post not found");
      } finally {
        setLoading(false);
      }
    };

    loadPost();
  }, [slug]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  if (!post) return <div>Post not found</div>;

  return (
    <div className="p-5 w-full min-h-screen mx-auto bg-neutral-950 text-neutral-200 gap-4 flex flex-col items-center">
      <Link to="/Blog" className="text-neutral-300 mb-4 block">
        ← Back to all posts
      </Link>

      <h1 className="text-4xl font-bold">{post.title}</h1>
      <p className="text-sm text-neutral-500 mb-6">{post.date}</p>

      <div className="prose prose-invert">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
    </div>
  );
};

export default BlogDetail;

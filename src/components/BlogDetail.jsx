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
    <div className="p-15 min-h-screen mx-auto bg-neutral-950 text-neutral-200 gap-4 flex flex-col items-center">
      <div className="w-1/2 flex flex-col">
        <Link to="/Blog" className="text-neutral-300 mb-4 block">
          ← Back to all posts
        </Link>

        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="text-sm text-neutral-500 mb-6">{post.date}</p>

        <div className="prose prose-invert text-neutral-200 text-xl gap-4">
          <ReactMarkdown
            components={{
              img: ({ node, ...props }) => (
                <img
                  src={props.src}
                  alt={props.alt || ""}
                  className="max-w-full h-auto my-4"
                />
              ),
              p: ({ node, ...props }) => (
                <p
                  className="text-lg text-neutral-300 leading-8 mb-6"
                  {...props}
                />
              ),
              h2: ({ node, ...props }) => (
                <h2 className="text-3xl font-bold mt-10 mb-4" {...props} />
              ),
              h3: ({ node, ...props }) => (
                <h3 className="text-2xl font-semibold mt-8 mb-3" {...props} />
              ),
              ul: ({ node, ...props }) => (
                <ul
                  className="list-disc ml-6 mb-6 text-neutral-300 leading-7"
                  {...props}
                />
              ),
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;

import BlogCard from "../components/BlogCard";
import { useState, useEffect } from "react";
import matter from "gray-matter";

function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Dynamically import all markdown files from the posts directory
    const importAll = (r) => r.keys().map(r);
    const markdownFiles = import.meta.glob("../posts/*.md", { as: "raw" });

    const loadPosts = async () => {
      const postsData = [];
      for (const path in markdownFiles) {
        const fileName = path.split("/").pop();
        const slug = fileName.replace(/\.md$/, "");

        const content = await markdownFiles[path]();
        const { data, content: markdownContent } = matter(content);

        postsData.push({
          slug,
          title: data.title,
          date: data.date,
          content: markdownContent,
        });
      }

      // Sort by date (newest first)
      postsData.sort((a, b) => new Date(b.date) - new Date(a.date));
      setPosts(postsData);
    };

    loadPosts();
  }, []);
  return (
    <div className="w-full min-h-screen bg-neutral-950 flex flex-col items-center p-6">
      <div className="w-1/2 flex flex-col gap-10">
        <h1 className="text-sky-50 font-bold text-4xl italic">my blog.</h1>
        <div className="grid gap-5">
          {posts.map((post) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              date={post.date}
              content={post.content}
              slug={post.slug}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;

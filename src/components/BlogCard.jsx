import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

const BlogCard = ({ title, date, content, slug }) => {
  return (
    <Link
      to={`/blog/${slug}`}
      className="rounded-sm border-2 text-neutral-200 p-5 flex items-center justify-between"
    >
      <div className="text-neutral-300">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-sm text-neutral-500">{date}</p>
        <div className="line-clamp-3 text-neutral-400">
          <ReactMarkdown>{content}</ReactMarkdown>
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;

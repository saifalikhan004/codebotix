import { Link, useParams } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function BlogDetail() {
  const { slug } = useParams();
  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="min-h-screen bg-emerald-50 text-emerald-900 pt-28 px-6">
        <div className="max-w-3xl mx-auto">
          <Link to="/blogs" className="text-sm text-emerald-600 hover:underline">← Back to Blogs</Link>
          <h1 className="text-2xl font-bold mt-4">Article not found</h1>
          <p className="text-emerald-700 mt-2">The blog you are looking for does not exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-emerald-50 text-emerald-900 pt-28 px-6 pb-10">
      <div className="max-w-3xl mx-auto">
        <Link to="/blogs" className="text-sm text-emerald-600 hover:underline">← Back to Blogs</Link>

        <h1 className="text-3xl md:text-4xl font-bold mt-4">{blog.title}</h1>
        <div className="text-emerald-700 text-sm mt-2">
          <span>{blog.author}</span> • <span>{new Date(blog.date).toLocaleDateString()}</span>
        </div>

        {blog.cover && (
          <div className="mt-6 overflow-hidden rounded-xl border border-emerald-200">
            <img src={blog.cover} alt={blog.title} className="w-full h-auto object-cover" />
          </div>
        )}

        <article className="prose prose-invert max-w-none mt-6">
          {blog.content.map((para, idx) => (
            <p key={idx} className="text-emerald-800 leading-relaxed">{para}</p>
          ))}
        </article>

        {blog.tags?.length ? (
          <div className="mt-8 flex flex-wrap gap-2">
            {blog.tags.map((t) => (
              <span key={t} className="px-3 py-1 text-xs rounded-full bg-emerald-200 text-emerald-800 border border-emerald-300">{t}</span>
            ))}
          </div>
        ) : null}
      </div>
    </div>
  );
}

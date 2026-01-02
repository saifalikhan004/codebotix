import { Link } from "react-router-dom";
import { blogs } from "../data/blogs";

export default function Blogs() {
	return (
		<div className="min-h-screen bg-emerald-50 text-emerald-900 pt-28 px-6 pb-10">
			<div className="max-w-6xl mx-auto">
				<div className="mb-8">
					<h1 className="text-3xl md:text-4xl font-bold">Blogs</h1>
					<p className="text-emerald-700 mt-2">Latest articles and guides.</p>
				</div>

				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{blogs.map((b) => (
						<Link
							key={b.slug}
							to={`/blogs/${b.slug}`}
							className="group block rounded-xl overflow-hidden border border-emerald-200 bg-white hover:border-emerald-400 hover:bg-emerald-50 transition"
						>
							<div className="aspect-square overflow-hidden">
								<img
									src={b.cover || "https://via.placeholder.com/600x600?text=Blog"}
									alt={b.title}
									className="w-full h-full object-cover group-hover:scale-105 transition-transform"
								/>
							</div>
							<div className="p-4">
								<h2 className="text-lg font-semibold line-clamp-2">{b.title}</h2>
								<p className="text-sm text-emerald-700 mt-2 line-clamp-2">{b.excerpt}</p>
								<div className="text-xs text-emerald-600 mt-3">
									<span>{new Date(b.date).toLocaleDateString()}</span>
									{b.author ? <span> • {b.author}</span> : null}
								</div>
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
}

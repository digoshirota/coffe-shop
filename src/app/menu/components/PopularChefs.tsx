import Link from 'next/link';

const posts = [
  {
    slug: 'discovering-affordable-gourmet-experiences',
    date: '09 DEC',
    title: 'DISCOVERING AFFORDABLE GOURMET EXPERIENCES IN YOUR CITY',
    author: 'Markus Daniel',
    comments: 2,
  },
  {
    slug: 'how-restaurants-foster-connections',
    date: '09 DEC',
    title: 'HOW RESTAURANTS FOSTER CONNECTIONS AND CREATE MEMORIES',
    author: 'Markus Daniel',
    comments: 2,
  }
];

export default function PopularChefs() {
  return (
    <section className="py-12">
      <div className="text-center mb-8">
        <button className="bg-[#e94f1d] text-white text-xs px-3 py-1 uppercase mb-2">Make Reservation</button>
        <h2 className="text-3xl font-bold">Our Popular Chefs</h2>
        <div className="mt-2 text-red-600">••••</div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {posts.map((post, idx) => (
          <div key={idx} className="bg-gray-100">
            <div className="h-40 bg-gray-300 flex items-center justify-center relative">
              <span className="absolute top-4 left-4 bg-[#e94f1d] text-white px-2 py-1 text-sm text-center font-bold">
                {post.date}
              </span>
            </div>
            <div className="p-6">
              <div className="text-sm text-gray-600 flex items-center gap-4 mb-2">
                <span className="flex items-center gap-1">
                  <div className="w-4 h-4 bg-gray-400 rounded-full"></div> {post.author}
                </span>
                <span className="text-xs flex items-center gap-1">💬 {post.comments} Comment</span>
              </div>
              <h3 className="text-lg font-bold mb-4">{post.title}</h3>
              <Link
                href={`/latest-news/${post.slug}`}
                className="inline-flex items-center text-sm border px-4 py-2 hover:bg-[#e94f1d] hover:text-white transition"
              >
                Read More <span className="ml-2">→</span>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

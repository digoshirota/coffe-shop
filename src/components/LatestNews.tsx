import Image from "next/image";
import Link from 'next/link'
const posts = [
  {
    date: '20',
    month: 'Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: '02',
    image: '/images/food-blog.png',
    link: 'another-blog'
  },
  {
    date: '20',
    month: 'Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: '02',
    image: '/images/japanese-food.png',
    link: 'another-blog'
  },
  {
    date: '20',
    month: 'Feb',
    category: 'Food Menu',
    title: 'How to ensure direct for the hassle-free visa process',
    comments: '02',
    image: '/images/italian-food.png',
    link: 'another-blog'
  },
  // Repita conforme necessário ou use `.map`
];

export default function LatestNews() {
  return (
    <section className="py-20 px-6 bg-white text-black text-center">
      <div className="mb-4">
        <button className="bg-[#e94f1d] text-white text-xs px-4 py-1 rounded-full uppercase tracking-wider">
          Crispy, every bite taste
        </button>
      </div>
      <div className="flex justify-between items-center max-w-6xl mx-auto mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold">Latest News Insights</h2>
        <Link
          href={'/latest-news?page=1'}
          className="hover:text-red-500 transition"
        >
          <button className="border border-black px-5 py-2 text-sm uppercase tracking-wide flex items-center gap-2 hover:bg-black hover:text-white transition">
            View All Posts →
          </button>
        </Link>

      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <Link
            href={'/latest-news?page=1' + post.link || '#'}
            className="hover:text-red-500 transition"
            key={index}
          >
            <div  className="bg-white shadow-md text-left">
              <div className="relative h-[200px]">
                <div className="flex flex-col items-center space-y-4">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute top-0 left-0 bg-[#e94f1d] text-white px-4 py-2 clip-path-date">
                  <span className="font-bold text-lg">{post.date}</span>{' '}
                  <span className="text-xs">{post.month}</span>
                </div>
              </div>
              <div className="p-4">
                <span className="text-[10px] bg-gray-200 px-2 py-[2px] rounded uppercase tracking-wide text-gray-700">
                  {post.category}
                </span>
                <h3 className="mt-2 font-bold uppercase text-sm">
                  {post.title}
                </h3>
                <div className="flex justify-between items-center text-xs text-gray-600 mt-4">
                  <span>🧑 0{post.comments} Comments</span>
                  <span className="text-lg">↗</span>
                </div>
              </div>
            </div>
          </Link>

        ))}
      </div>
    </section>
  );
}

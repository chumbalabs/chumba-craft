
import { Link } from "react-router-dom";

interface HeroPostProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

const HeroPost = ({ title, excerpt, category, image, date, slug }: HeroPostProps) => {
  return (
    <Link to={`/post/${slug}`}>
      <article className="relative h-[70vh] min-h-[600px] w-full overflow-hidden rounded-xl">
        <img
          src={image}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
          <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
            <span className="inline-block bg-primary px-4 py-1 rounded-full text-sm mb-4">
              {category}
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4 line-clamp-2">{title}</h1>
            <p className="text-lg mb-4 line-clamp-2 text-gray-200">{excerpt}</p>
            <time className="text-sm text-gray-300">{date}</time>
          </div>
        </div>
      </article>
    </Link>
  );
};

export default HeroPost;

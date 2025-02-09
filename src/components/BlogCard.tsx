
import { Link } from "react-router-dom";

interface BlogCardProps {
  title: string;
  excerpt: string;
  category: string;
  image: string;
  date: string;
  slug: string;
}

const BlogCard = ({ title, excerpt, category, image, date, slug }: BlogCardProps) => {
  return (
    <Link to={`/post/${slug}`} className="block">
      <article className="glass hover-card rounded-xl overflow-hidden h-full">
        <div className="aspect-video relative overflow-hidden">
          <img
            src={image}
            alt={title}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
          />
          <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
            {category}
          </span>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-3">{excerpt}</p>
          <time className="text-sm text-muted-foreground">{date}</time>
        </div>
      </article>
    </Link>
  );
};

export default BlogCard;

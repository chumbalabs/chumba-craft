
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroPost from "@/components/HeroPost";
import BlogCard from "@/components/BlogCard";

const FEATURED_POST = {
  title: "The Future of Cryptocurrency: What to Expect in 2024",
  excerpt: "Explore the latest trends and predictions for the cryptocurrency market in 2024. From Bitcoin's evolution to emerging altcoins, we cover everything you need to know.",
  category: "Crypto",
  image: "https://images.unsplash.com/photo-1518546305927-5a555bb7020d?q=80&w=2940&auto=format&fit=crop",
  date: "February 15, 2024",
  slug: "future-of-cryptocurrency-2024",
};

const RECENT_POSTS = [
  {
    title: "Understanding Forex Trading: A Beginner's Guide",
    excerpt: "Learn the basics of forex trading and how to get started in the world's largest financial market.",
    category: "Forex",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2940&auto=format&fit=crop",
    date: "February 14, 2024",
    slug: "understanding-forex-trading",
  },
  {
    title: "Top 5 Stock Market Strategies for 2024",
    excerpt: "Discover the most effective stock market strategies that professional traders are using this year.",
    category: "Stocks",
    image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?q=80&w=2940&auto=format&fit=crop",
    date: "February 13, 2024",
    slug: "top-stock-market-strategies-2024",
  },
  {
    title: "NFTs and Digital Asset Investment",
    excerpt: "An in-depth look at the NFT market and how it's reshaping digital asset investment.",
    category: "Crypto",
    image: "https://images.unsplash.com/photo-1620321023374-d1a68fbc720d?q=80&w=2937&auto=format&fit=crop",
    date: "February 12, 2024",
    slug: "nfts-digital-asset-investment",
  },
];

const CATEGORIES = [
  "All",
  "Crypto",
  "Blockchain",
  "Forex",
  "Stocks",
  "NFT",
  "Trading",
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      
      <main className="flex-1">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <section className="py-20 md:py-28">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                News and insights
              </h1>
              <p className="text-lg text-muted-foreground mb-10 max-w-2xl mx-auto">
                Learn about cryptocurrency, NFTs, and blockchain. Discover our latest market updates,
                trading strategies, and financial insights.
              </p>
              <div className="flex flex-wrap justify-center gap-3">
                {CATEGORIES.map((category) => (
                  <button
                    key={category}
                    className="px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors text-sm font-medium"
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section className="mb-20 fade-in max-w-6xl mx-auto">
            <HeroPost {...FEATURED_POST} />
          </section>

          <section className="mb-20 max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-10 text-center">Latest Posts</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
              {RECENT_POSTS.map((post, index) => (
                <div key={post.slug} className="fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                  <BlogCard {...post} />
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;


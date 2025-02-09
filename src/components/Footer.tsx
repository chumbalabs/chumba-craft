
import { Link } from "react-router-dom";
import { TrendingUp, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { toast } from "./ui/use-toast";

const Footer = () => {
  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    
    // Here you would typically handle the subscription logic
    console.log('Subscribing email:', email);
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates in your inbox.",
    });
    
    // Reset the form
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-12">
        {/* Newsletter Section */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-2">Stay up to date!</h2>
          <p className="text-muted-foreground mb-6">
            Subscribe to our newsletter to get inbox notifications.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-2 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1"
              required
            />
            <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Navigation and Logo */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center mb-8">
          <Link to="/" className="flex items-center justify-center md:justify-start gap-2">
            <TrendingUp className="w-6 h-6 text-primary" />
            <span className="text-xl font-semibold">Chumba Blog</span>
          </Link>

          <nav className="flex justify-center gap-6">
            <Link to="/concept" className="text-muted-foreground hover:text-foreground transition-colors">
              Concept
            </Link>
            <Link to="/story" className="text-muted-foreground hover:text-foreground transition-colors">
              Our story
            </Link>
            <Link to="/careers" className="text-muted-foreground hover:text-foreground transition-colors">
              Careers
            </Link>
            <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors">
              Contact us
            </Link>
          </nav>

          <div className="flex justify-center md:justify-end gap-4">
            <SocialLink icon={Facebook} href="https://facebook.com" />
            <SocialLink icon={Instagram} href="https://instagram.com" />
            <SocialLink icon={Twitter} href="https://twitter.com" />
            <SocialLink icon={Linkedin} href="https://linkedin.com" />
          </div>
        </div>

        {/* Legal Links */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 text-sm text-muted-foreground">
          <Link to="/privacy" className="hover:text-foreground transition-colors">
            Privacy Policy
          </Link>
          <span className="hidden md:inline">•</span>
          <Link to="/terms" className="hover:text-foreground transition-colors">
            Terms of Service
          </Link>
          <span className="hidden md:inline">•</span>
          <Link to="/cookies" className="hover:text-foreground transition-colors">
            Cookie Settings
          </Link>
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-muted-foreground hover:text-foreground transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;

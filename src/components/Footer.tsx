
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
    
    console.log('Subscribing email:', email);
    toast({
      title: "Thanks for subscribing!",
      description: "You'll receive our latest updates in your inbox.",
    });
    
    e.currentTarget.reset();
  };

  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Newsletter Section */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Stay up to date!
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Subscribe to our newsletter to get inbox notifications.
          </p>
          <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="flex-1 h-12 text-base"
              required
            />
            <Button 
              type="submit" 
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white min-w-[120px]"
            >
              Subscribe
            </Button>
          </form>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <TrendingUp className="w-6 h-6 text-primary" />
              <span className="text-xl font-semibold">Chumba Blog</span>
            </Link>
            <p className="text-muted-foreground text-sm">
              Your trusted source for cryptocurrency, NFTs, and blockchain insights.
            </p>
            <div className="flex gap-4">
              <SocialLink icon={Facebook} href="https://facebook.com" />
              <SocialLink icon={Instagram} href="https://instagram.com" />
              <SocialLink icon={Twitter} href="https://twitter.com" />
              <SocialLink icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-6">Quick Links</h3>
            <nav className="flex flex-col space-y-4">
              <FooterLink to="/crypto">Crypto</FooterLink>
              <FooterLink to="/forex">Forex</FooterLink>
              <FooterLink to="/stocks">Stocks</FooterLink>
              <FooterLink to="/nft">NFT</FooterLink>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-6">Company</h3>
            <nav className="flex flex-col space-y-4">
              <FooterLink to="/concept">Concept</FooterLink>
              <FooterLink to="/story">Our Story</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-6">Legal</h3>
            <nav className="flex flex-col space-y-4">
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/terms">Terms of Service</FooterLink>
              <FooterLink to="/cookies">Cookie Settings</FooterLink>
            </nav>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-sm text-muted-foreground pt-8 border-t">
          <p>© {new Date().getFullYear()} Chumba Blog. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children }: { to: string; children: React.ReactNode }) => (
  <Link 
    to={to} 
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </Link>
);

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="p-2 text-muted-foreground hover:text-foreground transition-colors hover:bg-gray-100 rounded-full"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;

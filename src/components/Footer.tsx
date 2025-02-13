
import { Link } from "react-router-dom";
import { TrendingUp, Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="space-y-4">
              <h2 className="text-xl font-semibold">Chumba Blog</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Your trusted source for cryptocurrency, NFTs, and blockchain insights.
              </p>
            </div>
            <div className="flex items-center gap-6 pt-2">
              <SocialLink icon={Facebook} href="https://facebook.com" />
              <SocialLink icon={Instagram} href="https://instagram.com" />
              <SocialLink icon={Twitter} href="https://twitter.com" />
              <SocialLink icon={Linkedin} href="https://linkedin.com" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-base mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/crypto">Crypto</FooterLink>
              <FooterLink to="/forex">Forex</FooterLink>
              <FooterLink to="/stocks">Stocks</FooterLink>
              <FooterLink to="/nft">NFT</FooterLink>
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-base mb-4">Company</h3>
            <nav className="flex flex-col space-y-3">
              <FooterLink to="/concept">Concept</FooterLink>
              <FooterLink to="/story">Our Story</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contact">Contact Us</FooterLink>
            </nav>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold text-base mb-4">Legal</h3>
            <nav className="flex flex-col space-y-3">
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
    className="text-muted-foreground hover:text-foreground transition-colors text-sm"
  >
    {children}
  </Link>
);

const SocialLink = ({ icon: Icon, href }: { icon: any; href: string }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-muted-foreground hover:text-foreground transition-colors"
  >
    <Icon className="w-5 h-5" />
  </a>
);

export default Footer;

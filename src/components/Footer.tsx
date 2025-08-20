import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-accent fill-current" /> by Cristian Tumani
          </p>
          <p className="font-body text-sm text-muted-foreground mt-2">
            © 2024 All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
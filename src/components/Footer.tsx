import { Heart } from "lucide-react";
import { MotionDiv } from "@/components/ui/motion";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border relative">
      <div className="absolute top-0 left-0 right-0 section-divider" />
      
      <div className="container mx-auto px-6">
        <MotionDiv className="text-center">
          <p className="font-body text-muted-foreground flex items-center justify-center gap-2">
            Built with <Heart className="w-4 h-4 text-foreground fill-current" /> by Cristian Tumani
          </p>
          <p className="font-body text-sm text-muted-foreground/60 mt-2">
            © 2024 All rights reserved
          </p>
        </MotionDiv>
      </div>
    </footer>
  );
};

export default Footer;

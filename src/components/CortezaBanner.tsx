import { useState, useEffect } from "react";
import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const CortezaBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const isDismissed = localStorage.getItem("cortezaBannerDismissed");
    if (!isDismissed) {
      setIsVisible(true);
    }
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
      localStorage.setItem("cortezaBannerDismissed", "true");
    }, 200);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.aside
          role="banner"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -60 }}
          transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
          className={`sticky top-0 z-[9999] w-full backdrop-blur-md ${
            isClosing ? "pointer-events-none" : ""
          }`}
          style={{
            background: "linear-gradient(135deg, hsla(300, 60%, 18%, 0.95) 0%, hsla(320, 45%, 25%, 0.95) 100%)",
            boxShadow: "0 1px 0 hsla(0,0%,100%,0.08), 0 4px 12px hsla(0,0%,0%,0.3)",
          }}
        >
          {/* Desktop Layout */}
          <div className="hidden md:flex items-center justify-center gap-4 px-10 py-3 min-h-[56px] relative">
            <span className="text-lg" role="img" aria-label="rocket">
              🚀
            </span>
            <p className="text-white/90 font-medium text-sm">
              I'm launching Corteza Beta — an AI-powered decision logger for Slack teams
            </p>
            <a
              href="https://corteza.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-white text-[#4A154B] hover:bg-white/95 hover:shadow-[0_0_20px_hsla(0,0%,100%,0.25)]"
            >
              Join Beta →
            </a>
            <button
              onClick={handleClose}
              aria-label="Dismiss announcement"
              className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile Layout */}
          <div className="flex md:hidden flex-col items-center text-center gap-3 px-5 py-4 relative">
            <button
              onClick={handleClose}
              aria-label="Dismiss announcement"
              className="absolute top-2 right-2 p-1.5 text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </button>
            <span className="text-lg" role="img" aria-label="rocket">
              🚀
            </span>
            <p className="text-white/90 font-medium text-sm pr-6">
              I'm launching Corteza Beta — an AI-powered decision logger for Slack teams
            </p>
            <a
              href="https://corteza.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-5 py-2 rounded-lg font-semibold text-sm transition-all duration-200 bg-white text-[#4A154B] hover:bg-white/95 hover:shadow-[0_0_20px_hsla(0,0%,100%,0.25)]"
            >
              Join Beta →
            </a>
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
};

export default CortezaBanner;

import { useState, useEffect } from "react";
import { X } from "lucide-react";

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

  if (!isVisible) return null;

  return (
    <aside
      role="banner"
      className={`sticky top-0 z-[9999] w-full shadow-[0_2px_8px_rgba(0,0,0,0.15)] transition-all duration-300 ${
        isClosing ? "opacity-0 -translate-y-full" : "opacity-100 translate-y-0 animate-slide-down"
      }`}
      style={{
        background: "linear-gradient(135deg, #4A154B 0%, #6B2D5C 100%)",
      }}
    >
      {/* Desktop Layout */}
      <div className="hidden md:flex items-center justify-center gap-4 px-10 py-3 min-h-[60px] relative">
        <span className="text-xl" role="img" aria-label="rocket">
          🚀
        </span>
        <p className="text-white font-medium text-sm md:text-base">
          I'm launching Corteza Beta — an AI-powered decision logger for Slack teams
        </p>
        <a
          href="https://corteza.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200 hover:bg-[#F8F7FF]"
          style={{
            backgroundColor: "white",
            color: "#4A154B",
          }}
        >
          Join Beta →
        </a>
        <button
          onClick={handleClose}
          aria-label="Dismiss announcement"
          className="absolute right-4 top-1/2 -translate-y-1/2 p-1 text-white/70 hover:text-white transition-opacity duration-200"
        >
          <X className="w-6 h-6" />
        </button>
      </div>

      {/* Mobile Layout */}
      <div className="flex md:hidden flex-col items-center text-center gap-3 px-5 py-4 relative">
        <button
          onClick={handleClose}
          aria-label="Dismiss announcement"
          className="absolute top-2 right-2 p-1 text-white/70 hover:text-white transition-opacity duration-200"
        >
          <X className="w-6 h-6" />
        </button>
        <span className="text-xl" role="img" aria-label="rocket">
          🚀
        </span>
        <p className="text-white font-medium text-sm pr-6">
          I'm launching Corteza Beta — an AI-powered decision logger for Slack teams
        </p>
        <a
          href="https://corteza.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-2.5 rounded-md font-semibold text-sm transition-colors duration-200 hover:bg-[#F8F7FF]"
          style={{
            backgroundColor: "white",
            color: "#4A154B",
          }}
        >
          Join Beta →
        </a>
      </div>
    </aside>
  );
};

export default CortezaBanner;

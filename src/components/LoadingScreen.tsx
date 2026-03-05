import { useEffect, useState } from "react";
import { siteConfig as c } from "@/config/site";

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // ✅ BLOCK SCROLL ON MOUNT
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            // ✅ UNBLOCK SCROLL ON COMPLETE
            document.body.style.overflow = 'unset';
            document.documentElement.style.overflow = 'unset';
            onComplete();
          }, 200);
          return 100;
        }
        return prev + 2;
      });
    }, 30);

    return () => {
      clearInterval(timer);
      // ✅ SAFETY CLEANUP
      document.body.style.overflow = 'unset';
      document.documentElement.style.overflow = 'unset';
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-primary z-[9999] flex flex-col items-center justify-center overflow-hidden">
      <div className="text-center">
        <h1 className="font-display text-5xl font-bold text-primary-foreground mb-3">
          {c.name}
        </h1>
        <p className="text-primary-foreground/70 italic text-lg mb-12">
          {c.loadingTagline}
        </p>
        <div className="w-48 h-1 bg-primary-foreground/20 rounded-full mx-auto overflow-hidden">
          <div
            className="h-full bg-accent rounded-full transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;

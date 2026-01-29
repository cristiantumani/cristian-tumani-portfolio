import { motion, HTMLMotionProps, Variants } from "framer-motion";
import { forwardRef, ReactNode } from "react";

// Fade in from bottom animation
export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Fade in animation
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

// Stagger container for children animations
export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

// Scale in animation
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Slide in from left
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -30 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Motion section wrapper with scroll animation
interface MotionSectionProps extends HTMLMotionProps<"section"> {
  children: ReactNode;
}

export const MotionSection = forwardRef<HTMLElement, MotionSectionProps>(
  ({ children, ...props }, ref) => (
    <motion.section
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.section>
  )
);
MotionSection.displayName = "MotionSection";

// Motion div with scroll animation
interface MotionDivProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
}

export const MotionDiv = forwardRef<HTMLDivElement, MotionDivProps>(
  ({ children, delay = 0, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.5, delay, ease: [0.25, 0.46, 0.45, 0.94] }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
MotionDiv.displayName = "MotionDiv";

// Stagger children wrapper
interface StaggerContainerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  staggerDelay?: number;
}

export const StaggerContainer = forwardRef<HTMLDivElement, StaggerContainerProps>(
  ({ children, staggerDelay = 0.1, ...props }, ref) => (
    <motion.div
      ref={ref}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1
          }
        }
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerContainer.displayName = "StaggerContainer";

// Stagger item for use inside StaggerContainer
interface StaggerItemProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
}

export const StaggerItem = forwardRef<HTMLDivElement, StaggerItemProps>(
  ({ children, ...props }, ref) => (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      {...props}
    >
      {children}
    </motion.div>
  )
);
StaggerItem.displayName = "StaggerItem";

export { motion };

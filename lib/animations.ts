import { Variants } from 'framer-motion';

export const luxuryEase = [0.16, 1, 0.3, 1] as const;

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: luxuryEase,
    },
  },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.08,
    },
  },
};

export const editorialReveal: Variants = {
  hidden: {
    opacity: 0,
    clipPath: 'polygon(0 0, 100% 0, 100% 0, 0 0)',
  },
  visible: {
    opacity: 1,
    clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
    transition: {
      duration: 1.1,
      ease: luxuryEase,
    },
  },
};

export const subtleScale: Variants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: {
      duration: 0.6,
      ease: luxuryEase,
    },
  },
};

"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
};

function isInViewport(node: HTMLElement) {
  const rect = node.getBoundingClientRect();
  return rect.top < window.innerHeight * 0.92 && rect.bottom > 64;
}

export default function ScrollReveal({
  children,
  className = "",
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true);
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const reveal = () => setVisible(true);

    const maybeHideIfBelowFold = () => {
      if (isInViewport(node)) {
        reveal();
        return;
      }
      // Only hide off-screen sections so they can animate in later
      setAnimate(true);
      setVisible(false);
    };

    // Wait for initial #hash scroll to settle before deciding to hide
    const boot = window.setTimeout(maybeHideIfBelowFold, 50);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          reveal();
          observer.disconnect();
        }
      },
      { threshold: 0.01 },
    );
    observer.observe(node);

    const onNavigate = () => {
      // Let the browser finish scrolling to the hash target
      window.setTimeout(() => {
        if (isInViewport(node)) reveal();
      }, 40);
    };

    window.addEventListener("hashchange", onNavigate);

    const failsafe = window.setTimeout(reveal, 1500);

    return () => {
      window.clearTimeout(boot);
      window.clearTimeout(failsafe);
      observer.disconnect();
      window.removeEventListener("hashchange", onNavigate);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${
        animate
          ? "transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none"
          : ""
      } ${
        visible ? "translate-y-0 opacity-100" : "translate-y-3 opacity-0"
      } ${className}`.trim()}
    >
      {children}
    </div>
  );
}

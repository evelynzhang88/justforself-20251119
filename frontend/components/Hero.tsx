"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto max-w-4xl">
        <div className="text-center">
          <h1
            className={`text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-slate-900 dark:text-slate-50 transition-all duration-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Hey, I'm{" "}
            <span className="text-slate-600 dark:text-slate-400">John Doe</span>
          </h1>

          <p
            className={`text-xl md:text-2xl text-slate-600 dark:text-slate-400 mb-8 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
          </p>

          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-16 text-sm md:text-base">
            <Link
              href="#projects"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 font-medium transition-colors"
            >
              Projects
            </Link>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            >
              Linkedin Profile
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            >
              Twitter Profile
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            >
              Youtube Channel
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            >
              Github Profile
            </a>
            <span className="text-slate-300 dark:text-slate-700">|</span>
            <a
              href="https://dev.to"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-50 transition-colors"
            >
              DEV.to Blog Profile
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="mt-24">
            <div className="animate-bounce">
              <svg
                className="w-5 h-5 mx-auto text-slate-400 dark:text-slate-600"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


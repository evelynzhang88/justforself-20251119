"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function About() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "Tailwind CSS",
    "PostgreSQL",
  ];

  return (
    <section
      id="about"
      className="py-24 px-6 lg:px-8 bg-slate-50 dark:bg-slate-950"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-50">
            About Me
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Get to know me */}
          <div
            className={`transition-all duration-700 delay-100 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              Get to know me!
            </h3>
            <div className="space-y-4 text-slate-600 dark:text-slate-400 leading-relaxed">
              <p>
                I'm a <strong className="text-slate-900 dark:text-slate-50">Frontend Focused Web Developer</strong> building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the <strong className="text-slate-900 dark:text-slate-50">Projects</strong> section.
              </p>
              <p>
                I also like sharing content related to the stuff that I have learned over the years in <strong className="text-slate-900 dark:text-slate-50">Web Development</strong> so it can help other people of the Dev Community. Feel free to Connect or Follow me on my <a href="https://linkedin.com" className="text-slate-900 dark:text-slate-50 hover:underline">Linkedin</a> and <a href="https://instagram.com" className="text-slate-900 dark:text-slate-50 hover:underline">Instagram</a> where I post useful content related to Web Development and Programming.
              </p>
              <p>
                I'm open to <strong className="text-slate-900 dark:text-slate-50">Job</strong> opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to <strong className="text-slate-900 dark:text-slate-50">contact</strong> me.
              </p>
            </div>
            <Link
              href="#contact"
              className="inline-block mt-6 px-6 py-3 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200"
            >
              Contact
            </Link>
          </div>

          {/* My Skills */}
          <div
            className={`transition-all duration-700 delay-200 ${
              mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
          >
            <h3 className="text-2xl font-bold mb-6 text-slate-900 dark:text-slate-50">
              My Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 rounded-lg text-sm font-medium hover:border-slate-300 dark:hover:border-slate-700 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


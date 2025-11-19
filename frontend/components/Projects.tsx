"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  link?: string;
  github?: string;
}

export default function Projects() {
  const [mounted, setMounted] = useState(false);
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    setMounted(true);
    
    // Fetch projects from Strapi
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_STRAPI_URL || 'http://localhost:1337'}/api/projects?populate=*`
        );
        if (response.ok) {
          const data = await response.json();
          if (data.data && Array.isArray(data.data)) {
            setProjects(
              data.data.map((item: any) => ({
                id: item.id,
                title: item.attributes.title,
                description: item.attributes.description,
                image: item.attributes.image?.data?.attributes?.url,
                technologies: item.attributes.technologies || [],
                link: item.attributes.link,
                github: item.attributes.github,
              }))
            );
          }
        }
      } catch (error) {
        console.error('Error fetching projects:', error);
        // Fallback to mock data if API fails
        setProjects([
          {
            id: 1,
            title: "E-Commerce Platform",
            description:
              "A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.",
            technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
            link: "#",
            github: "#",
          },
          {
            id: 2,
            title: "Task Management App",
            description:
              "A collaborative task management application with real-time updates and team collaboration features.",
            technologies: ["React", "Node.js", "Socket.io", "MongoDB"],
            link: "#",
            github: "#",
          },
          {
            id: 3,
            title: "Portfolio Website",
            description:
              "A modern, responsive portfolio website built with Next.js and Tailwind CSS, integrated with Strapi CMS.",
            technologies: ["Next.js", "Tailwind CSS", "Strapi", "TypeScript"],
            link: "#",
            github: "#",
          },
        ]);
      }
    };

    fetchProjects();
  }, []);

  return (
    <section
      id="projects"
      className="py-24 px-6 lg:px-8 bg-white dark:bg-slate-900"
    >
      <div className="container mx-auto max-w-6xl">
        <div
          className={`text-center mb-12 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-3 text-slate-900 dark:text-slate-50">
            Projects
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Here you will find some of the personal and clients projects that I created with each project containing its own case study
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`group bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 ${
                mounted
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-72 bg-slate-100 dark:bg-slate-900 flex items-center justify-center overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="text-slate-400 dark:text-slate-600 text-6xl font-bold">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-slate-900 dark:text-slate-50">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                  {project.description}
                </p>
                <Link
                  href={project.link || "#"}
                  className="inline-block px-6 py-3 bg-slate-900 dark:bg-slate-50 text-white dark:text-slate-900 rounded-lg font-medium hover:bg-slate-800 dark:hover:bg-slate-200 transition-all duration-200"
                >
                  Case Study
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}


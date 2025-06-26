"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconFileTextSpark,
  IconTerminal2,
  IconUserFilled,
} from "@tabler/icons-react";

export function FloatingDockDemo() {
  const links = [


    {
      title: "Projects",
      icon: (
        <IconTerminal2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/projects",
    },
    {
      title: "AboutMe",
      icon: (
        <IconUserFilled className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/aboutme",
    },
    {
      title: "CV",
      icon: (
        <IconFileTextSpark className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/cv.pdf", // Path to your file
      target: "_blank", // Opens in a new tab
      rel: "noopener noreferrer", // Security best practice
    },
    {
      title: "GitHub",
      icon: (
        <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/TomasFerreira66",
    },
    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/tom%C3%A1s-ferreira-891405236/",
    },
  ];
  return (
    (<div className="flex items-center justify-center w-full">
      <FloatingDock    
        items={links} />
    </div>)
  );
}

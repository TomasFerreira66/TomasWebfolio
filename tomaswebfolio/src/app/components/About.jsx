"use client";
import React from "react";
import Link from 'next/link';
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  IconBrandGithub,
  IconBrandGmail,
  IconBrandLinkedin,
  IconBrandX,
  IconExchange,
  IconFileTextSpark,
  IconHome,
  IconNewSection,
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
      href: "#",
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
    (<div className="flex items-center justify-center h-[20rem] w-full">
      <FloatingDock
        // only for demo, remove for production
        mobileClassName="translate-y-20"
        items={links} />
    </div>)
  );
}

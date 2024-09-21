// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Theme } from "./theme";
import { darkTheme, lightTheme } from "./theme";

// Genetal Site Settings
export const SITE_TITLE = "Jupyter Blog";
export const SITE_DESCRIPTION = "Jupyters Notebook inspired Astro Blog";
export const SITE_BASED_IN = "Vienna, Austria";
export const SITE_FAVICON = "/assets/images/favicon.ico";
export const SITE_SOCIALS = {
  GitHub: "https://github.com/younissk",
  // I Don't use social media, but here you can add your own socials
};

// Content Settings
export const CONTENT_TYPES = ["Blog", "Essay", "Tutorial", "Project", "Guide"];
export const CONTENT_TOPICS = ["AI", "Math", "Web Development", "Astro"];

// Header Settings
export const HEADER = {
  LINKS: [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Blog",
      href: "/blog",
    },
    {
      name: "About",
      href: "/about",
    },
  ],
};

// Theme Settings (See theme.ts for more details)
export const THEME: Theme = darkTheme;

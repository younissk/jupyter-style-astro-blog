// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import type { Theme } from "./theme";
import { darkTheme } from "./theme";


export const SITE_TITLE = 'Astro Blog';
export const SITE_DESCRIPTION = 'Welcome to my website!';

export const CONTENT_TYPES = ['Blog', 'Essay', 'Tutorial', 'Project', "Guide"];
export const CONTENT_TOPICS = ['AI', 'Math', 'Web Development', 'Astro']

export const HEADER = {
    LINKS: [
        {
            name: 'Home',
            href: '/',
        },
        {
            name: 'Blog',
            href: '/blog',
        },
        {
            name: 'About',
            href: '/about',
        },
    ]
}
export const THEME: Theme = darkTheme;

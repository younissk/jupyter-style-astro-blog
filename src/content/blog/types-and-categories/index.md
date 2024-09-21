---
title: 'Types and Categories'
description: 'How to use types and categories for your blog posts'
pubDate: '21 Sep 2024'
heroImage: '/blog-placeholder-3.jpg'
type: 'Blog'
topic: 'Web Development'
---

In the `consts.ts` file, you can see that we have two arrays. One for the types and one for the categories.

```ts
export const CONTENT_TYPES = ["Blog", "Essay", "Tutorial", "Project", "Guide"];
export const CONTENT_TOPICS = ["AI", "Math", "Web Development", "Astro"];
```

Here you can specify the types and categories that you want to use in your blog. These will then be checked using zod and used to validate the data in the frontmatter of your blog posts.

As an example, this blog post has the following frontmatter:

```yaml
title: 'Types and Categories'
description: 'How to use types and categories for your blog posts'
pubDate: '21 Sep 2024'
heroImage: '/blog-placeholder-3.jpg'
type: 'Blog'
topic: 'Web Development'
```

These can later be used to filter the blog posts. However, I have not implemented this yet. Help is appreciated.



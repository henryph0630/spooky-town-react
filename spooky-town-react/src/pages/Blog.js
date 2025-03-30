import React from "react";
import BlogPostCard from "../components/BlogPostCard";
import "../styles.css";

const Blog = () => {
  return (
    <main id="blog-main">
      <h2>Blog</h2>

      <BlogPostCard
        image="/assets/Images/ahlloween blog.jpg"
        title="Halloween is Here!"
        author="John Spookey"
        link="/blog/halloween"
        content={`As the owner of Spooky Town, there’s no time of year I love more than Halloween. When the first crisp breeze of autumn rolls in and the leaves begin to change, I know it’s time to dust off the cobwebs and bring our store to life...`}
      />

      <BlogPostCard
        image="/assets/Images/decortaion.jpg"
        title="Daily Decoration Idea"
        author="Jack O'Lantarn"
        link="/blog/decor"
        content={`Hello, Halloween enthusiasts! Jack O'Lantern here, your resident costume designer at Spooky Town. While I usually spend my days crafting spooktacular costumes, I couldn’t resist sharing...`}
      />
    </main>
  );
};

export default Blog;
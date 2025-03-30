import React from "react";
import { Link } from "react-router-dom";

const BlogPostCard = ({ image, title, author, content, link }) => {
  return (
    <section>
      <img src={image} alt={title}/>
      <section>
        <h2>
          <Link to={link}>{title}</Link>
        </h2>
        <h3>By {author}</h3>
        <p>{content}</p>
      </section>
    </section>
  );
};

export default BlogPostCard;
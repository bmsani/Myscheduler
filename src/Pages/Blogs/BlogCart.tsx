import React from "react";
import { useNavigate } from "react-router-dom";
type blogInfo = {
  blog: {
    _id: string;
    title: string;
    article: string;
    author: string;
    authorImg: string;
    blogImg: string;
  };
  index: number;
};
const BlogCart = ({ blog, index }: blogInfo) => {
  const { _id, title, article, author, authorImg, blogImg } = blog;
  const navigate = useNavigate();
  const handleBlogDetails = (id: string) => {
    navigate(`/blogDetails/${id}`);
  };
  return (
    <div
      onClick={() => handleBlogDetails(_id)}
      className={
        index === 1
          ? " lg:col-span-2 border border-primary rounded-lg cursor-pointer hover:shadow-primary hover:shadow-md duration-300"
          : "border border-primary rounded-lg cursor-pointer hover:shadow-primary hover:shadow-md duration-300"
      }
    >
      <img
        src={blogImg}
        className="h-[250px] object-cover w-full rounded-t-lg"
        alt=""
      />
      <div className="p-5">
        <p className="font-bold text-3xl text-primary" aria-label="Article">
          {title}
        </p>
        <p className="text-sm text-gray-500 mt-2">
          {article.slice(0, 120)}...{" "}
          <span className="text-error">Read more</span>
        </p>
        <div className="flex items-center gap-5 mt-3">
          <div className="avatar">
            <div className="w-10 rounded-full ring-[1px] ring-primary ring-offset-base-100 ring-offset-1">
              <img src={authorImg} alt="author" />
            </div>
          </div>
          <div>
            <div
              aria-label="Author"
              title="Author"
              className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
            >
              {author}
            </div>
            <p className="text-sm font-medium leading-4 text-gray-600">
              Author
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCart;

import React, { useEffect, useState } from "react";
import Footer from "../../Shared/Footer/Footer";
import Loading from "../../Shared/LoadingSpinner/Loading";
import BlogCart from "./BlogCart";

type blogInfo = {
  _id: string;
  title: string;
  article: string;
  author: string;
  authorImg: string;
  blogImg: string;
};
const Blogs = () => {
  const [blogs, setBlogs] = useState<blogInfo[]>([]);

  useEffect(() => {
    fetch("https://secure-chamber-99191.herokuapp.com/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  if (blogs.length === 0) {
    return <Loading />;
  }
  return (
    <div>
      <div className="py-14  flex justify-center">
        <div className="mx-3 max-w-4xl grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8 ">
          {blogs?.map((blog, index: number) => (
            <BlogCart blog={blog} index={index + 1} key={blog._id} />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blogs;

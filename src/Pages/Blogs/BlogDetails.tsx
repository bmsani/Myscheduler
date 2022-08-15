import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../Shared/LoadingSpinner/Loading";

const BlogDetails = () => {
  const { id } = useParams();
  const [blog, setBlog] = useState({
    title: "",
    article: "",
    author: "",
    authorImg: "",
    blogImg: "",
  });

  useEffect(() => {
    const url = `https://secure-chamber-99191.herokuapp.com/blogs/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [id]);

  const { title, article, author, authorImg, blogImg } = blog;
  if (!title) {
    return <Loading />;
  }
  return (
    <div className="pt-20 pb-14  flex justify-center">
      <div className="mx-3 max-w-4xl">
        <p className="text-primary text-5xl font-bold">{title}</p>
        <div className="flex items-center gap-5 mt-5">
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
        <img className="rounded-lg my-5" src={blogImg} alt="" />
        <p>{article}</p>
      </div>
    </div>
  );
};

export default BlogDetails;

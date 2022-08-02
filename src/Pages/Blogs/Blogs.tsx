import React, { useEffect, useState } from "react";
import blog from '../../Utilities/Image/blog.png';
import blog2 from '../../Utilities/Image/blog-2.webp';
const Blogs = () => {
  const [blogs, setBlogs] = useState([])
  console.log(blogs);

  useEffect(() => {
    fetch('blog.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
  }, [])
  return (
    <div className="pt-20 px-16">
      <h1 className="text-3xl text-primary text-center mt-4 my-14 font-bold">Blog Page</h1>
      <div className="">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded ">
              <a href="/" aria-label="Article">
                <img
                  src={blog}
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </a>
              <div className="pt-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  13 Jul 2020
                </p>
                <a
                  href="/"
                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                </a>
                <p className="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
              </div>
              <div className="flex items-center">
                <a href="/" aria-label="Author" title="Author" className="mr-3">
                  <img
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                    alt="avatar"
                    className="object-cover w-10 h-10 rounded-full shadow-sm"
                  />
                </a>
                <div>
                  <a
                    href="/"
                    aria-label="Author"
                    title="Author"
                    className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Vasile Melinte
                  </a>
                  <p className="text-sm font-medium leading-4 text-gray-600">
                    Author
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div>
            <div className="grid-cols-1 h-[80%]">
              <h1 className="text-3xl mb-4">Recent Post</h1>
              {
                blogs.map((blog: { title: string; article: string }) => <div className="border mb-4">
                  <div className="flex">
                    <div>
                      <img src={blog2} className="w-[300px] h-[180px]" alt="" />
                    </div>
                    <div>
                      {/* <div className="mb-2">
                      <a
                        href="/"
                        className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        aria-label="Category"
                        title="Delevopment"
                      >
                        Delevopment
                      </a>
                    </div> */}
                      <div className="mb-2 mt-5">
                        <p

                          aria-label="Article"
                          className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          {blog.title}
                        </p>
                      </div>
                      <p className="mb-5 text-sm text-gray-700">
                        {blog.article}
                      </p>
                      <div className="flex items-center">
                        <p aria-label="Author" title="Author" className="mr-3">
                          <img
                            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                            alt="avatar"
                            className="object-cover w-10 h-10 rounded-full shadow-sm"
                          />
                        </p>
                        <div>
                          <p

                            aria-label="Author"
                            title="Author"
                            className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                          >
                            Petru Vîrtos
                          </p>
                          <p className="text-sm font-medium leading-4 text-gray-600">
                            Author
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>)
              }

              {/* <div className="border">
                <div className="flex">
                  <div>
                    <img src={blog2} className="w-[300px] h-[180px]" alt="" />
                  </div>
                  <div>
                    <div className="mb-2 mt-5">
                      <a
                        href="/"
                        aria-label="Article"
                        className="inline-block text-xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                      >
                        Why I love Laravel
                      </a>
                    </div>
                    <p className="mb-5 text-sm text-gray-700">
                      Sed ut perspiciatis unde omnis iste natus error sit sed quia
                      consequuntur magni voluptatem doloremque.
                    </p>
                    <div className="flex items-center">
                      <a href="/" aria-label="Author" title="Author" className="mr-3">
                        <img
                          src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                          alt="avatar"
                          className="object-cover w-10 h-10 rounded-full shadow-sm"
                        />
                      </a>
                      <div>
                        <a
                          href="/"
                          aria-label="Author"
                          title="Author"
                          className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Petru Vîrtos
                        </a>
                        <p className="text-sm font-medium leading-4 text-gray-600">
                          Author
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>


        </div>
        {/* <div className="grid-cols-1">
          <div>
            <img src={blog} className="w-[20px]" alt="" />
            <div>
              <div>
                <div className="mb-2">
                  <a
                    href="/"
                    className="text-xs font-semibold tracking-wide uppercase transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                    aria-label="Category"
                    title="Delevopment"
                  >
                    Delevopment
                  </a>
                </div>
                <div className="mb-2">
                  <a
                    href="/"
                    aria-label="Article"
                    className="inline-block text-2xl font-bold leading-5 text-black transition-colors duration-200 hover:text-deep-purple-accent-400"
                  >
                    Why I love Laravel
                  </a>
                </div>
                <p className="mb-5 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex items-center">
                  <a href="/" aria-label="Author" title="Author" className="mr-3">
                    <img
                      src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                      alt="avatar"
                      className="object-cover w-10 h-10 rounded-full shadow-sm"
                    />
                  </a>
                  <div>
                    <a
                      href="/"
                      aria-label="Author"
                      title="Author"
                      className="font-semibold text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-400"
                    >
                      Petru Vîrtos
                    </a>
                    <p className="text-sm font-medium leading-4 text-gray-600">
                      Author
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* 2nd section */}
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-5 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
          {
            blogs.map(blog => <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
              <p aria-label="Article">
                <img
                  src="https://images.pexels.com/photos/932638/pexels-photo-932638.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
                  className="object-cover w-full h-64 rounded"
                  alt=""
                />
              </p>
              <div className="py-5">
                <p className="mb-2 text-xs font-semibold text-gray-600 uppercase">
                  13 Jul 2020
                </p>
                <p

                  aria-label="Article"
                  className="inline-block mb-3 text-black transition-colors duration-200 hover:text-deep-purple-accent-700"
                >
                  <p className="text-2xl font-bold leading-5">Diving to the deep</p>
                </p>
                <p className="mb-4 text-gray-700">
                  Sed ut perspiciatis unde omnis iste natus error sit sed quia
                  consequuntur magni voluptatem doloremque.
                </p>
                <div className="flex space-x-4">
                  <p

                    aria-label="Likes"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="6 23 1 23 1 12 6 12"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <path
                          d="M6,12,9,1H9a3,3,0,0,1,3,3v6h7.5a3,3,0,0,1,2.965,3.456l-1.077,7A3,3,0,0,1,18.426,23H6Z"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">7.4K</p>
                  </p>
                  <p

                    aria-label="Comments"
                    className="flex items-start text-gray-800 transition-colors duration-200 hover:text-deep-purple-accent-700 group"
                  >
                    <div className="mr-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        stroke="currentColor"
                        className="w-5 h-5 text-gray-600 transition-colors duration-200 group-hover:text-deep-purple-accent-700"
                      >
                        <polyline
                          points="23 5 23 18 19 18 19 22 13 18 12 18"
                          fill="none"
                          strokeMiterlimit="10"
                        />
                        <polygon
                          points="19 2 1 2 1 14 5 14 5 19 12 14 19 14 19 2"
                          fill="none"
                          stroke="currentColor"
                          strokeMiterlimit="10"
                        />
                      </svg>
                    </div>
                    <p className="font-semibold">81</p>
                  </p>
                </div>
              </div>
            </div>)
          }

        </div>
      </div>


    </div>
  );
};

export default Blogs;

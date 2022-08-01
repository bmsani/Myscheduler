import React from "react";
import blog from '../../Utilities/Image/blog.png';
const Blogs = () => {
  return (
    <div className="pt-20 px-16">
      <h1 className="text-3xl text-primary text-center">Blog Page</h1>
      <div className="">
        <div className="grid grid-cols-2 gap-16">
          <div>
            <div className="overflow-hidden transition-shadow duration-300 bg-white rounded">
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
            <div className="grid-cols-1">
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
    </div>
  );
};

export default Blogs;

import React from "react";
import website from "../../Utilities/icon/website.png";
import links from "../../Utilities/icon/link.png";
import email from "../../Utilities/icon/email.png";

const ShareLink = () => {
  return (
    <div>
      <input type="checkbox" id="my-modal-6" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <div>
            <h2 className="text-2xl text-center">Share Your Link</h2>
            <form className="form-control">
              <label className="label">
                <span className="label-text">Copy Your Link</span>
              </label>
              <div className="flex gap-12 items-center ">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  border-blue-500 w-full max-w-xs "
                />
                <button className="btn bg-blue-500 rounded-full border-none hover:bg-blue-300">
                  <img src={links} className="w-[40px]  " alt="" />
                </button>
              </div>
              <label className="label">
                <span className="label-text">Email Your Link</span>
              </label>
              <div className="flex gap-12 items-center ">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  border-blue-500 w-full max-w-xs "
                />
                <button className="btn bg-blue-500 rounded-full border-none hover:bg-blue-300">
                  <img src={email} className="w-[40px]  " alt="" />
                </button>
              </div>
              <label className="label">
                <span className="label-text">Add to Your Website</span>
              </label>
              <div className="flex gap-12 items-center">
                <input
                  type="text"
                  placeholder="Type here"
                  className="input  border-blue-500 w-full max-w-xs "
                />
                <button className="btn bg-blue-500 rounded-full border-none hover:bg-blue-300">
                  <img src={website} className="w-[40px]  " alt="" />
                </button>
              </div>
            </form>
          </div>

          <div className="modal-action">
            <label
              htmlFor="my-modal-6"
              className="btn w-full bg-primary hover:bg-blue-700 border-none"
            >
              Close
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareLink;

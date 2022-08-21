import React, { FormEvent, useRef } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import GetUserInfo from "../../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const ReviewInput = () => {
  const [user, loading] = useAuthState(auth);
  const email = user?.email;
  const { userInfo, isLoading } = GetUserInfo(email);

  const getPosition = useRef<HTMLInputElement | null>(null);
  const getReview = useRef<HTMLTextAreaElement | null>(null);
  const getRating = useRef<HTMLInputElement | null>(null);

  const handleReview = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = userInfo?.name;
    const image = userInfo.imageURL;
    const position = getPosition?.current?.value;
    const review = getReview?.current?.value;
    const rating = getRating?.current?.value;
    const reviewInfo = { name, image, position, review, rating };

    fetch(`http://localhost:5000/review`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `bearer ${localStorage.getItem("accessToken")}`,
      },
      body: JSON.stringify(reviewInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          const resetForm = event.target as HTMLFormElement;
          resetForm.reset();
          toast.success("Review Added Successfully");
        }
      });
  };

  if (loading || isLoading) {
    return <Loading />;
  }
  console.log(userInfo);
  return (
    <div className="flex justify-center items-center py-8">
      <form
        onSubmit={handleReview}
        className="mx-2 w-full md:w-[500px] md:mx-0"
      >
        <div className="mt-4">
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            ref={getPosition}
            placeholder="Your position"
          />
        </div>

        <div className="mt-4">
          <textarea
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            name="message"
            id="message"
            ref={getReview}
            cols={10}
            rows={5}
            placeholder="Write Feedback"
          ></textarea>
        </div>

        <div className="mt-4">
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="number"
            name="mobile"
            ref={getRating}
          />
        </div>
        <div className="flex justify-between gap-5 mt-4">
          <input
            className="mt-4 bg-primary py-2 px-4 rounded-lg text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
            type="submit"
            value="Save Change"
          />
        </div>
      </form>
    </div>
  );
};

export default ReviewInput;

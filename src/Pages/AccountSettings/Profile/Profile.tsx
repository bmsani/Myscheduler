import React, { FormEvent, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import ButtonSpinner from "../../../Shared/ButtonSpinner/ButtonSpinner";
import GetUserInfo from "../../../Shared/GetUserInfo/GetUserInfo";
import Loading from "../../../Shared/LoadingSpinner/Loading";

const Profile = () => {
  const imageStorageKey = "8c4220582d4b8f04cc8ea7c8298a1449";
  const [user] = useAuthState(auth);
  const email = user?.email;
  const { userInfo, isLoading, refetch } = GetUserInfo(email);

  const [loading, setLoading] = useState(false);

  const getName = useRef<HTMLInputElement | null>(null);
  const getMessage = useRef<HTMLTextAreaElement | null>(null);
  const getMobile = useRef<HTMLInputElement | null>(null);
  const getImg = useRef<HTMLInputElement | null>(null);

  const firstLetter = userInfo?.name?.slice(0, 1);

  const handleProfile = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const name = getName?.current?.value;
    const message = getMessage?.current?.value;
    const mobile = getMobile?.current?.value;

    setLoading(true);
    const imgPath: any = getImg?.current?.files;
    if (imgPath?.length) {
      const formData = new FormData();
      formData.append("image", imgPath[0]);
      const url = `https://api.imgbb.com/1/upload?key=${imageStorageKey}`;
      fetch(url, {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          const imageUrl = result.data.url;
          const updatedUser = {
            name: name,
            message: message,
            mobile: mobile,
            imageURL: imageUrl,
          };
          const url = `http://localhost:5000/updatedUser/${email}`;
          fetch(url, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(updatedUser),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged === true) {
                toast.success("Profile successfully updated");
                refetch();
                setLoading(false);
              } else {
                toast.error("Failed to update");
                refetch();
                setLoading(false);
              }
            });
        });
    } else if (userInfo?.imageURL) {
      const updatedUser = {
        name: name,
        message: message,
        mobile: mobile,
        imageURL: userInfo?.imageURL,
      };
      const url = `http://localhost:5000/updatedUser/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Profile successfully updated");
            refetch();
            setLoading(false);
          } else {
            toast.error("Failed to update");
            refetch();
            setLoading(false);
          }
        });
    } else {
      const updatedUser = {
        name: name,
        message: message,
        mobile: mobile,
      };
      const url = `http://localhost:5000/updatedUser/${email}`;
      fetch(url, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
          authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
        body: JSON.stringify(updatedUser),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.acknowledged === true) {
            toast.success("Profile successfully updated");
            refetch();
            setLoading(false);
          } else {
            toast.error("Failed to update");
            refetch();
            setLoading(false);
          }
        });
    }
  };

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="flex justify-center items-center">
      <form onSubmit={handleProfile} className="w-full">
        <div className="flex items-center gap-5">
          {userInfo?.imageURL ? (
            <img
              className="w-[120px] h-[120px] object-cover rounded-full border border-primary"
              src={userInfo?.imageURL as string}
              alt=""
            />
          ) : (
            <p className="w-[120px] h-[120px] rounded-full border border-primary p-1 flex justify-center items-center bg-gray-200">
              <span className="text-8xl font-semibold">{firstLetter}</span>
            </p>
          )}

          <input ref={getImg} type="file" name="image" id="image" hidden />
          <div
            className="tooltip tooltip-primary hover:tooltip-open tooltip-right"
            data-tip="Upload Image"
          >
            <label
              className="hover:shadow hover:shadow-primary cursor-pointer w-10 h-10 rounded-full flex justify-center items-center bg-primary text-3xl  text-base-100 hover:bg-accent duration-300 "
              htmlFor="image"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="name">
            Name
          </label>

          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="text"
            ref={getName}
            defaultValue={userInfo?.name || user?.displayName || ""}
          />
        </div>

        <div className="mt-4">
          <label className="text-primary font-medium" htmlFor="message">
            Welcome Message
          </label>

          <textarea
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            name="message"
            id="message"
            ref={getMessage}
            defaultValue={userInfo?.message}
            cols={10}
            rows={3}
          ></textarea>
        </div>

        <div className="my-4">
          <label className="text-primary font-medium" htmlFor="mobile">
            Mobile
          </label>
          <input
            className="border border-[#b8b8b8] focus:outline-none focus:border-secondary block rounded-lg p-2 mt-1 w-full"
            type="number"
            name="mobile"
            ref={getMobile}
            defaultValue={userInfo?.mobile}
          />
        </div>
        <div className="flex justify-between gap-5">
          {loading ? (
            <button className="w-[150px] bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer">
              <ButtonSpinner />
            </button>
          ) : (
            <input
              className="w-[150px] bg-primary py-2 px-4 rounded-full text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
              type="submit"
              value="Save Change"
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default Profile;

import React, { useEffect, useRef, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import auth from "../../../init.firebase";
import Loading from "../../../Shared/LoadingSpinner/Loading";
import imgIcon from "../../../Utilities/icon/image.png";

interface userInfoType {
  brandLogo: string;
}

const Branding = () => {
  const [loading, setLoading] = useState(false);
  const [userInfo, setUserInfo] = useState({
    brandLogo: "",
  });
  const [user] = useAuthState(auth);
  const getImg = useRef<HTMLInputElement | null>(null);

  const imageStorageKey = "8c4220582d4b8f04cc8ea7c8298a1449";

  useEffect(() => {
    const url = `http://localhost:5000/user/${user?.email}`;
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setUserInfo(data);
      });
  }, [user]);

  const handleImgUpload = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const imgPath: any = getImg?.current?.files;
    console.log(imgPath[0]);
    if (!imgPath[0]) {
      return toast.error("Upload Your Logo");
    } else {
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
          const brandLogoLink = {
            brandLogo: imageUrl,
          };
          fetch(`http://localhost:5000/brandLogo/${user?.email}`, {
            method: "PUT",
            headers: {
              "content-type": "application/json",
              authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
            body: JSON.stringify(brandLogoLink),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data.acknowledged === true) {
                toast.success("Brand Logo Added Successful");
              } else {
                toast.error("Brand Logo Added Failed");
              }
            });
          setLoading(false);
        });
    }
  };
  if (loading) {
    return <Loading></Loading>;
  }
  return (
    <div className="w-full max-w-sm lg:max-w-md mx-auto py-8">
      <h1 className="text-2xl text-gray-600 mb-2">Logo</h1>
      <div className="w-full h-[200px] border border-gray-400 rounded">
        {userInfo.brandLogo ? (
          <div className="h-full flex items-center justify-center">
            <img className="w-[350px]" src={userInfo?.brandLogo} alt="" />
          </div>
        ) : (
          <div className="h-full flex items-center justify-center">
            <img className="w-32" src={imgIcon} alt="" />
          </div>
        )}
      </div>

      <form
        onSubmit={(e) => handleImgUpload(e)}
        className="flex justify-between items-center mt-6"
      >
        <div>
          <input ref={getImg} type="file" name="image" id="image" hidden />
          <label
            className="flex items-center gap-3 border border-gray-500 py-2 px-4 rounded text-gray-500 hover:shadow-md hover:shadow-gray-500 duration-300 cursor-pointer"
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
            Upload Image
          </label>
        </div>
        <input
          type="submit"
          value="Save Change"
          className="bg-primary py-2 px-4 rounded text-white hover:shadow-md hover:shadow-secondary duration-300 cursor-pointer"
        />
      </form>
    </div>
  );
};

export default Branding;

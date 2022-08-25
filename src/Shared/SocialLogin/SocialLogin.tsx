import React from "react";
import googleLogo from "../../Utilities/Logos/Google.png";
const SocialLogin = ({ signInWithGoogle }: any) => {
  return (
    <div className="flex justify-center gap-5">
      <button
        onClick={() => signInWithGoogle()}
        className="w-full flex justify-center items-center gap-3 text-primary border border-primary hover:border-secondary hover:text-secondary p-2 rounded-full hover:shadow duration-300"
      >
        Or Login With
        <img className="w-[25px]" src={googleLogo} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;

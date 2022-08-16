import React from "react";
import googleLogo from "../../Utilities/Logos/Google.png";
const SocialLogin = ({ signInWithGoogle}: any) => {
  return (
    <div className="flex justify-center gap-5">
      <button
        onClick={() => signInWithGoogle()}
        className="bg-slate-200 border border-primary hover:border-secondary p-2 rounded-full hover:shadow duration-300"
      >
        <img className="w-[30px]" src={googleLogo} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;

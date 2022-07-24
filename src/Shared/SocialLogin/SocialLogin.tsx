import React from "react";
import google from "../../Utilities/Logos/Google.png";
import facebook from "../../Utilities/Logos/Facebook.png";
const SocialLogin = ({signInWithGoogle, signInWithFacebook}: any) => {
  return (
    <div className="flex justify-center gap-5">
      <button onClick={()=>signInWithGoogle()} className="bg-slate-200 border border-secondary hover:border-primary p-2 rounded-lg hover:shadow duration-300">
        <img className="w-[30px]" src={googleLogo} alt="" />
      </button>
      <button onClick={()=>signInWithFacebook()} className="bg-slate-200 border border-secondary hover:border-primary p-2 rounded-lg hover:shadow duration-300">
        <img className="w-[30px]" src={facebookLogo} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;

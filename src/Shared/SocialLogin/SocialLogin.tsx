import React from "react";
import googleLogo from "../../Utilities/Logos/Google.png";
import githubLogo from "../../Utilities/Logos/github.png";
const SocialLogin = ({signInWithGoogle}: any) => {
  return (
    <div className="flex justify-center gap-5">
      <button onClick={()=>signInWithGoogle()} className="bg-slate-200 border border-secondary hover:border-primary p-2 rounded-lg hover:shadow duration-300">
        <img className="w-[30px]" src={googleLogo} alt="" />
      </button>
      <button className="bg-slate-200 border border-secondary hover:border-primary p-2 rounded-lg hover:shadow duration-300">
        <img className="w-[30px]" src={githubLogo} alt="" />
      </button>
    </div>
  );
};

export default SocialLogin;

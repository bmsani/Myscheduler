import {
  useCreateUserWithEmailAndPassword,
  useSignInWithFacebook,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../init.firebase";
import Loading from "../../Shared/LoadingSpinner/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import regImg from "../../Utilities/Image/register.png";

type LocationState = {
  from: {
    path: string;
  };
};

interface FormValues {
  name: string;
  email: string;
  password: string;
}

const Register: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>();

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [signInWithGoogle, GUser, GLoading, GError] = useSignInWithGoogle(auth);
  const [signInWithFacebook, FUser, FLoading, FError] =
    useSignInWithFacebook(auth);

  const navigate = useNavigate();
  const location = useLocation();

  let from = (location.state as LocationState)?.from.path || "/";

  if (loading || GLoading || FLoading) {
    return <Loading></Loading>;
  }
  if (user || GUser || FUser) {
    navigate(from, { replace: true });
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    reset();
  };
  return (
    <div className="grid loginRegBg grid-cols-1 md:grid-cols-2 h-[100vh] pt-8">
      <div className="bg-primary hidden md:flex justify-center items-center">
        <img className="w-[500px]" src={regImg} alt="" />
      </div>
      <div className="flex justify-center bg-[#e1f7f7]">
        <div className="w-[500px] p-5 my-12 ">
          <div>
            <div className="text-primary text-center">
              <p className="text-3xl font-bold">Create Account</p>
              <p className="mt-2">
                Enter your info below to create an account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="bg-[#e1f7f7] w-full border-b border-b-primary mt-4 p-2 text-1xl focus:outline-none focus:border-b-secondary"
                {...register("name", {
                  required: {
                    value: true,
                    message: "Name is Required",
                  },
                })}
              />
              <label className="label">
                {errors.name?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.name.message}
                  </span>
                )}
              </label>

              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#e1f7f7] w-full border-b border-b-primary mt-4 p-2 text-1xl focus:outline-none focus:border-b-secondary"
                {...register("email", {
                  required: {
                    value: true,
                    message: "Email is Required",
                  },
                  pattern: {
                    value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                    message: "Provide a valid Email",
                  },
                })}
              />
              <label className="label">
                {errors.email?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
                {errors.email?.type === "pattern" && (
                  <span className="label-text-alt text-red-500">
                    {errors.email.message}
                  </span>
                )}
              </label>

              <input
                type="Password"
                placeholder="Password"
                className="bg-[#e1f7f7] w-full border-b border-b-primary mt-4 p-2 text-1xl focus:outline-none focus:border-b-secondary"
                {...register("password", {
                  required: {
                    value: true,
                    message: "Password is Required",
                  },
                  minLength: {
                    value: 6,
                    message: "Must be 6 characters or longer",
                  },
                })}
              />
              <label className="label">
                {errors.password?.type === "required" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="label-text-alt text-red-500">
                    {errors.password.message}
                  </span>
                )}
              </label>
              <p className="text-error text-sm">
                {(error || GError || FError) && (error?.message || GError?.message || FError?.message)}
              </p>
              <input
                type="submit"
                className="rounded-full text-white hover:bg-secondary bg-primary shadow-lg  duration-300 cursor-pointer mt-6 p-2 text-1xl"
                value="Register"
              />
            </form>

            <div className="text-black mt-8 block">
              Already have an account?{" "}
              <Link to="/login" className="text-primary font-bold">
                {" "}
                <span className="hover:text-secondary duration-300">
                  login{" "}
                </span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <span>Or create account with</span>
              <SocialLogin signInWithGoogle={signInWithGoogle} signInWithFacebook={signInWithFacebook} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

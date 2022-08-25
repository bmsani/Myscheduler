import {
  useCreateUserWithEmailAndPassword,
  useSignInWithGoogle,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import { useForm, SubmitHandler } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import useToken from "../../Hooks/useToken";
import auth from "../../init.firebase";
import Loading from "../../Shared/LoadingSpinner/Loading";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import regImg from "../../Utilities/Image/register.png";

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
  const [updateProfile, updating, updateError] = useUpdateProfile(auth);
  const navigate = useNavigate();
  const [token] = useToken(user || GUser);

  if (loading || GLoading || updating) {
    return <Loading></Loading>;
  }
  if (token) {
    navigate("/dashboard/allEvents");
  }

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    await createUserWithEmailAndPassword(data.email, data.password);
    await updateProfile({ displayName: data.name });
    reset();
  };
  return (
    <div className="mx-auto px-2 md:px-5 lg:px-20 max-w-[1400px] grid grid-cols-1 md:grid-cols-2 items-center content-center py-6 bg-[#F1F3F8]">
      <div className="hidden md:flex justify-center items-center">
        <img className="w-[500px]" src={regImg} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-[400px] p-5 border border-secondary rounded-lg shadow-sm shadow-secondary bg-base-100">
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
                className="w-full border-b border-b-primary mt-4 p-2 text-1xl focus:outline-none focus:border-b-secondary"
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
                className="w-full border-b border-b-primary mt-2 p-2 text-1xl focus:outline-none focus:border-b-secondary"
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
                className="w-full border-b border-b-primary mt-2 p-2 text-1xl focus:outline-none focus:border-b-secondary"
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
                {(error || GError) && (error?.message || GError?.message)}
              </p>
              <input
                type="submit"
                className="rounded-full text-white hover:bg-[#3825b1] bg-secondary shadow-lg  duration-300 cursor-pointer mt-4 p-2 text-1xl"
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

            <div className="mt-6 w-full">
              <SocialLogin signInWithGoogle={signInWithGoogle} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

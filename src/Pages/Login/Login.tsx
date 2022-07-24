import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginImg from "../../Utilities/Image/login.png";

interface FormValues {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data submitted: ", data);

  return (
    <div className="grid loginRegBg grid-cols-1 md:grid-cols-2 h-[100vh] pt-12">
      <div className="bg-primary hidden md:flex justify-center items-center">
        <img className="w-[550px]" src={loginImg} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-[500px] p-5 my-12 ">
          <div>
            <div className="text-secondary text-center">
              <p className="text-3xl font-bold">Login</p>
              <p className="mt-2">Enter your info below to login.</p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control">
              <input
                type="email"
                placeholder="Your Email"
                className="text-primary w-full mt-8 p-2 text-1xl border border-[#b4b4b4] focus:border-secondary focus:outline-none rounded-lg"
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
                className="text-primary w-full mt-4 p-2 text-1xl border border-[#b4b4b4] focus:border-secondary focus:outline-none rounded-lg"
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
              <input
                type="submit"
                className="rounded-lg text-white bg-secondary hover:bg-primary shadow-lg  duration-300 cursor-pointer mt-4 p-2 text-1xl"
                value="Login"
              />
            </form>

            <div className="text-black mt-8 block">
              New in MyScheduler?{" "}
              <Link to="/register" className="text-secondary font-bold">
                {" "}
                <span className="hover:text-primary duration-300">
                  Create an account
                </span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <span>Or login with</span>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

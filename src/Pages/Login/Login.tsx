import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
import SocialLogin from "../../Shared/SocialLogin/SocialLogin";
import loginImg from "../../Utilities/Image/Illustration.png";
import "./Login.css";

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
    <div className="grid grid-cols-1 md:grid-cols-2 h-[100vh] pt-12">
      <div className="hidden bg-primary md:flex justify-center items-center">
        <img className="w-[350px]" src={loginImg} alt="" />
      </div>
      <div className="flex justify-center bg-[#e1f7f7]">
        <div className="w-[500px] p-5 my-12 ">
          <div>
            <p className="text-secondary  text-3xl text-center">Welcome!</p>
            <p className="text-center mt-2">Enter your info below to login.</p>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="form-control w-full"
            >
              <input
                type="email"
                placeholder="Your Email"
                className="bg-[#e1f7f7] w-full border-b border-b-secondary mt-4 p-2 text-1xl focus:outline-none focus:border-b-primary"
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
                className="bg-[#e1f7f7] w-full border-b border-b-secondary mt-4 p-2 text-1xl focus:outline-none focus:border-b-primary"
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
                className="rounded-full bg-secondary hover:bg-primary hover:shadow-lg  duration-300  w-full text-white cursor-pointer mt-7 p-2 text-1xl"
                value="Sign In"
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

            <div className="mt-8 flex items-center gap-5">
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

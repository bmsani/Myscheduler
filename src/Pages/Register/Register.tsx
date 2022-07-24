import { useForm, SubmitHandler } from "react-hook-form";
import { Link } from "react-router-dom";
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
  } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) =>
    console.log("data submitted: ", data);
  return (
    <div className="grid loginRegBg grid-cols-1 md:grid-cols-2 h-[100vh] pt-8">
      <div className="bg-primary hidden md:flex justify-center items-center">
        <img className="w-[500px]" src={regImg} alt="" />
      </div>
      <div className="flex justify-center">
        <div className="w-[500px] p-5 my-12 ">
          <div>
            <div className="text-secondary text-center">
              <p className="text-3xl font-bold">Create Account</p>
              <p className="mt-2">
                Enter your info below to create an account.
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="form-control">
              <input
                type="text"
                placeholder="Your Name"
                className="text-primary w-full mt-8 p-2 text-1xl border border-[#b4b4b4] focus:border-secondary focus:outline-none rounded-lg"
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
                className="text-primary w-full mt-4 p-2 text-1xl border border-[#b4b4b4] focus:border-secondary focus:outline-none rounded-lg"
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
                value="Register"
              />
            </form>

            <div className="text-black mt-8 block">
              Already have an account?{" "}
              <Link to="/login" className="text-secondary font-bold">
                {" "}
                <span className="hover:text-primary duration-300">login</span>
              </Link>
            </div>

            <div className="mt-6 flex items-center gap-5">
              <span>Or create account with</span>
              <SocialLogin />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

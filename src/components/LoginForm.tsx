import { BsForward } from "react-icons/bs";
import loginLogo from "../assets/standalone circular .png"
const LoginForm = () => {
    return (
        <div className="w-full max-w-[490px] bg-white min-[800px]:px-6 relative max-[700px]:px-10 shadow-2xl rounded-2xl">
            {/* logo section */}
            <div className="w-[70px] mb-15 absolute loginLogo top-15 bg-transparent min-[280px]:left-[25%] min-[338px]:left-[40%]  -translate-y-1/2 flex justify-center items-center">
                <img src={loginLogo} />
            </div>
            {/* paragraph and heading section */}
            <p className="text-gray-400 text-left pt-25">Welcome back!!!</p>
            <h1 className="text-4xl font-extrabold text-left pt-4">Sign in</h1>
            {/* form section */}
            <form>
                <div className="input-wrapper mt-10">
                    <label
                        htmlFor="email"
                        className="capitalize text-gray-600 text-sm flex"
                    >
                        Email:
                    </label>
                    <input
                        type="email"
                        id="email"
                        placeholder="johndoe@email.com"
                        className="h-12 w-full border mt-2 px-3 rounded-2xl border-gray-200 bg-[#FFEDE1] text-gray-600 placeholder-gray-400 focus:outline-none
                        focus:border-[#F47458] 
                        "
                    />
                    {/* <p className="pt-3 text-red-600">{errors.email?.message}</p> */}
                </div>

                <div className="input-wrapper mt-8">
                    <label
                        htmlFor="Password"
                        className="capitalize text-gray-600 text-sm flex justify-between"
                    >
                        <span>Password:</span>{" "}
                        <p className="text-gray-400 underline cursor-pointer">
                            Forgot password?
                        </p>
                    </label>
                    <input
                        // {...register("password")}
                        // type={showPass ? "text" : "password"}
                        type="password"
                        placeholder="password"
                        className="w-full mt-3 border border-gray-200 bg-[#FFEDE1] text-gray-400 px-3 h-12 rounded-2xl placeholder-gray-400 focus:outline-none
                        focus:border-[#F47458]
                        "
                        id="password"
                    />
                    <span
                        // onClick={() => setShowPass((prev) => !prev)}
                        className="text-gray-400 absolute dark:text-white right-7 top-[50%] transform -translate-y-1/8 cursor-pointer"
                    >
                        {/* {showPass ? <AiOutlineEye /> : <AiOutlineEyeInvisible />} */}
                    </span>
                    {/* <p className="pt-3 text-red-600">{errors.password?.message}</p> */}
                </div>

                <div className="flex items-center justify-center">
                    <button className="cursor-pointer flex items-center justify-evenly bg-[#F47458] w-[120px] h-10 my-12 text-white rounded-xl">
                        Sign in{" "}
                        <span>
                            <BsForward />
                        </span>
                    </button>
                </div>
            </form>

            <p className="text-gray-300 pb-15">
                I don't have an account?{" "}
                <span className="text-[#F47458] pl-1 tracking-wide cursor-pointer">
                    Sign up!
                </span>
            </p>
        </div>
    );
};

export default LoginForm;

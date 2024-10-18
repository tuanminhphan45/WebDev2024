import React, { useRef } from "react";
import {
    AiOutlineGoogle,
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineTwitter,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = ({ onLogin }) => {
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin({
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
    };

    return (
        <div className="absolute left-1/2 transform -translate-x-1/2 w-full p-[4vw] flex flex-col items-center transition-opacity duration-300 opacity-100">
            <h2 className="text-2xl font-semibold text-black text-center mb-3">
                Sign In
            </h2>

            <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <div className="flex items-center gap-2 border-2 border-grey rounded-full bg-white/20 p-4 shadow-sm">
                    <i className="bx bx-user text-black"></i>
                    <input
                        type="text"
                        className="flex-grow outline-none bg-transparent text-black"
                        placeholder="Enter username"
                        ref={usernameRef}
                        required
                    />
                </div>

                <div className="flex items-center gap-2 border-2 border-grey rounded-full bg-white/20 p-4 shadow-sm">
                    <i className="bx bx-lock-alt text-black"></i>
                    <input
                        type="password"
                        className="flex-grow outline-none bg-transparent text-black"
                        placeholder="Enter password"
                        ref={passwordRef}
                        required
                    />
                </div>

                <div className="flex items-center justify-between">
                    <div className="flex items-center">
                        <input
                            id="remember-me"
                            type="checkbox"
                            className="checkbox"
                        />
                        <label
                            htmlFor="remember-me"
                            className="ml-1 text-sm text-gray-900"
                        >
                            Remember me
                        </label>
                    </div>
                    <Link to="#" className="text-sm text-black hover:underline">
                        Forgot password?
                    </Link>
                </div>

                <button
                    type="submit"
                    className="w-full h-14 bg-lime-400 text-white rounded-full shadow-md transition-all duration-300 hover:gap-4"
                >
                    Login
                </button>
            </form>

            <div className="flex gap-4 mt-4">
                {[
                    AiOutlineGoogle,
                    AiOutlineFacebook,
                    AiOutlineGithub,
                    AiOutlineTwitter,
                ].map((Icon, index) => (
                    <Icon
                        key={index}
                        className="w-8 h-8 bg-white/20 rounded-full shadow-lg hover:scale-95 hover:shadow-xl transition-all border-grey border-2 duration-300 ease-in-out"
                    />
                ))}
            </div>
        </div>
    );
};

export default Login;

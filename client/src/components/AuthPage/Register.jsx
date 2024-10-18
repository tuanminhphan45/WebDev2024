import React, { useRef } from "react";

const Register = ({ onRegister }) => {
    const emailRef = useRef(null);
    const usernameRef = useRef(null);
    const passwordRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();

        onRegister({
            email: emailRef.current.value,
            username: usernameRef.current.value,
            password: passwordRef.current.value,
        });
    };

    return (
        <div className="flex flex-col items-center w-full p-[4vw] transition-all">
            <h2 className="text-2xl font-semibold text-black text-center mb-4 -mt-8">
                Create Account
            </h2>

            <form
                className="w-full flex flex-col gap-4"
                onSubmit={handleSubmit}
            >
                <input
                    type="email"
                    className="w-full h-14 p-4 text-black bg-white/20 rounded-full outline-none 
                               backdrop-blur-md border-2 border-grey shadow-sm"
                    placeholder="Email"
                    ref={usernameRef}
                    required
                />
                <input
                    type="text"
                    className="w-full h-14 p-4 text-black bg-white/20 rounded-full outline-none 
                               backdrop-blur-md border-2 border-grey shadow-sm"
                    placeholder="Profile Name"
                    ref={usernameRef}
                    required
                />
                <input
                    type="password"
                    className="w-full h-14 p-4 text-black bg-white/20 rounded-full outline-none 
                               backdrop-blur-md border-2 border-grey shadow-sm"
                    placeholder="Password"
                    ref={passwordRef}
                    required
                />

                <button
                    type="submit"
                    className="flex items-center justify-center w-full h-14 bg-lime-400 
                               text-white rounded-full shadow-md transition-all gap-2 hover:gap-4"
                >
                    <span>Sign Up</span>
                </button>
            </form>
        </div>
    );
};

export default Register;

import React, { useState } from "react";
import shape1 from "../../assets/images/shape1.png";
import shape2 from "../../assets/images/shape2.svg";
import shape3 from "../../assets/images/shape3.svg";
import registrationBanner from "../../assets/images/registration1.png";
import logo from '../../assets/images/logo.svg';
import { useAuthStore } from "../../store/useAuthStore";
import { Link } from "react-router-dom";

const Register = () => {
    const { signup, isSigningUp } = useAuthStore();
    const [profilePic, setProfilePic] = useState(null);

    const imgbbKey = "d124993969e06253e686485e0548aaa8";

    const uploadToImgbb = async (file) => {
        const form = new FormData();
        form.append("image", file);

        const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbKey}`, {
            method: "POST",
            body: form,
        });

        const data = await res.json();
        return data.data.url; // final image URL
    };

    const HandleSubmit = async (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        const confirmPass = e.target.confirmPass.value;

        if (password !== confirmPass) {
            alert("Passwords do not match");
            return;
        }

        let uploadedImgUrl = "";

        if (profilePic) {
            uploadedImgUrl = await uploadToImgbb(profilePic);
        }

        const formData = {
            fullName: name,
            email,
            password,
            profilePic: uploadedImgUrl, // send image URL
        };

        signup(formData);
    };

    return (
        <div className="min-h-screen bg-[#F0F2F5] flex items-center justify-center relative overflow-hidden px-6">
            
            <img src={shape1} className="w-40 absolute top-0 left-0 opacity-70" />
            <img src={shape2} className="w-72 absolute top-0 right-0 opacity-70" />
            <img src={shape3} className="w-72 absolute bottom-0 right-10 opacity-70" />

            <div className="flex w-full max-w-6xl items-center gap-10 pl-12 relative z-10 pt-7">

                <div className="hidden lg:flex w-1/2 justify-center">
                    <img src={registrationBanner} className="w-[450px]" />
                </div>

                <div className="w-72 bg-white shadow-lg p-6 space-y-5 relative">

                    <div className="flex justify-center items-center">
                        <img src={logo} alt="" className="w-24" />
                    </div>

                    <p className="text-xs text-center">Get Started Now</p>
                    <h2 className="text-center text-lg font-semibold text-gray-800">
                        Registration
                    </h2>

                    <div className="space-y-2">
                        <form onSubmit={HandleSubmit}>

                            <input
                                name="name"
                                type="text"
                                placeholder="Full Name"
                                className="input input-bordered rounded-xl mb-1 w-full text-sm h-8"
                                required
                            />

                            <input
                                name="email"
                                type="email"
                                placeholder="Email"
                                className="input input-bordered rounded-xl mb-1 w-full text-sm h-8"
                                required
                            />

                            <input
                                name="password"
                                type="password"
                                placeholder="Password"
                                className="input input-bordered rounded-xl mb-1 w-full text-sm h-8"
                                required
                            />

                            <input
                                name="confirmPass"
                                type="password"
                                placeholder="Repeat Password"
                                className="input input-bordered rounded-xl mb-1 w-full text-sm h-8"
                                required
                            />

                            {/* Upload Profile Picture */}
                            <input
                                type="file"
                                accept="image/*"
                                className="input input-bordered rounded-xl mb-2 w-full text-sm h-8"
                                onChange={(e) => setProfilePic(e.target.files[0])}
                            />

                            <button
                                className="btn bg-[#1890FF] text-white w-full rounded-xl text-sm h-8"
                                disabled={isSigningUp}
                            >
                                {isSigningUp ? "Signing Up..." : "Sign Up"}
                            </button>
                        </form>
                    </div>

                    <p className="text-center text-[11px] text-gray-500">
                        Already have an account?
                        <span className="text-blue-500 cursor-pointer">
                            <Link to="/login"> Login Now </Link>
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;

"use client";

import { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";

export default function LoginPage() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <main className="min-h-screen bg-[#f3f4f6] flex items-center justify-center px-4 py-8 md:py-0">
            <div className="w-full max-w-[422px] bg-white rounded-[16px] md:rounded-[22px] shadow-[0_15px_40px_rgba(0,0,0,0.08)] min-h-auto md:h-auto ">
                <div className="px-[44px] md:px-[80px] pt-[32px] md:pt-[42px] pb-[32px] md:pb-[42px]">
                    {/* Logo */}
                    <div className="flex justify-center">
                        <div className="w-[72px] md:w-[82px] h-[42px] md:h-[82px] rounded-full
            
            border border-[#ececec] flex items-center justify-center bg-gradient-to-br from-[#060A24] via-[#09103A] to-[#8E257F]">
                            <img
                                src="/latpaylogin.png"
                                alt="Logo"
                                className="w-[32px] md:w-[38px] h-[32px] md:h-[38px] object-contain"
                            />
                        </div>
                    </div>

                    {/* Title */}
                    <div className="text-center mt-[20px] md:mt-[28px]">
                        <h1 className="text-[22px] md:text-[24px] font-bold text-[#0f172a] leading-none">
                            Welcome back
                        </h1>

                        <p className="mt-[8px] md:mt-[10px] text-[13px] md:text-[14px] text-[#64748b]">
                            Sign in to continue to Latpay CFM
                        </p>
                    </div>

                    {/* Form */}
                    <form className="mt-[20px] md:mt-[28px]">
                        {/* Email */}
                        <div>
                            <label className="block text-[13px] md:text-[14px] text-[#475569] mb-[6px] md:mb-[8px]">
                                Email address
                            </label>

                            <input
                                type="email"
                                defaultValue="pbs2k04@gmail.com"
                                className="w-full h-[44px] md:h-[50px] px-[12px] md:px-[14px] text-[14px] md:text-[15px] border border-[#222] rounded-[8px] outline-none bg-white"
                            />
                        </div>

                        {/* Password */}
                        <div className="mt-[16px] md:mt-[18px]">
                            <label className="block text-[13px] md:text-[14px] text-[#475569] mb-[6px] md:mb-[8px]">
                                Password
                            </label>

                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    defaultValue="12345678"
                                    className="w-full h-[44px] md:h-[50px] px-[12px] md:px-[14px] pr-[40px] md:pr-[45px] text-[14px] md:text-[15px] border border-[#222] rounded-[8px] outline-none bg-white"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-[12px] md:right-[14px] top-1/2 -translate-y-1/2 text-[#6b7280]"
                                    aria-label={showPassword ? "Hide password" : "Show password"}
                                >
                                    {showPassword ? (
                                        <FiEye className="w-5 h-5 cursor-pointer" />
                                    ) : (
                                        <FiEyeOff className="w-5 h-5 cursor-pointer" />
                                    )}
                                </button>
                            </div>
                        </div>

                        {/* Remember  and Forgot */}
                        <div className="flex items-center justify-between mt-[16px] md:mt-[18px]">
                            <label className="flex items-center gap-[8px] cursor-pointer">
                                <input
                                    type="checkbox"
                                    className="w-[14px] md:w-[15px] h-[14px] md:h-[15px]"
                                />
                                <span className="text-[13px] md:text-[14px] text-[#64748b]">
                                    Remember me
                                </span>
                            </label>

                            <a
                                href="#"
                                className="text-[13px] md:text-[14px] text-[#ff3b8d] font-medium"
                            >
                                Forgot password?
                            </a>
                        </div>

                        {/* Button */}
                        <button
                            type="submit"
                            className="
                mt-[16px]
                md:mt-[18px]
                w-full
                h-[44px]
                md:h-[48px]
                rounded-[8px]
                text-white
                text-[15px]
                md:text-[16px]
                font-semibold
                bg-gradient-to-br from-[#060A24] via-[#09103A] to-[#8E257F]
                cursor-pointer
              "
                        >
                            Sign in
                        </button>

                        {/* Footer */}
                        <div className="text-center mt-[20px] md:mt-[24px]">
                            <p className="text-[12px] md:text-[13px] text-[#94a3b8]">
                                Demo Access Only • No real data processed
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </main>
    );
}
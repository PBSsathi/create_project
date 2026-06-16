export default function LandingPage() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-[#060A24] via-[#09103A] to-[#8E257F]">

            {/* Top Left Circles */}
            <div className="absolute -top-24 -left-24 sm:-top-28 sm:-left-28 md:-top-32 md:-left-32 w-56 h-56 sm:w-72 sm:h-72 md:w-[340px] md:h-[340px] rounded-full border border-white/25 animate-pulse" />

            <div className="absolute -top-20 -left-20 sm:-top-24 sm:-left-24 md:-top-[120px] md:-left-[120px] w-44 h-44 sm:w-60 sm:h-60 md:w-[270px] md:h-[280px] rounded-full border border-white/15 animate-pulse" />

            {/* Bottom Right Circles */}
            <div className="absolute -bottom-24 -right-24 sm:-bottom-28 sm:-right-28 md:-bottom-[130px] md:-right-[140px] w-60 h-60 sm:w-80 sm:h-80 md:w-[380px] md:h-[380px] rounded-full border border-white/18 animate-pulse" />

            <div className="absolute -bottom-20 -right-20 sm:-bottom-24 sm:-right-24 md:-bottom-[120px] md:-right-[120px] w-48 h-48 sm:w-64 sm:h-64 md:w-[310px] md:h-[310px] rounded-full border border-white/15 animate-pulse" />

            {/* Dot Pattern */}
            <div className="absolute left-3 top-3 animate-pulse">
                <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                    {[...Array(25)].map((_, i) => (
                        <span
                            key={i}
                            className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-white/20"
                        />
                    ))}
                </div>
            </div>

            {/* add bottom dot pattern */}
            <div className="absolute right-3 bottom-3 animate-pulse">
                <div className="grid grid-cols-5 gap-2 sm:gap-3 md:gap-4">
                    {[...Array(25)].map((_, i) => (
                        <span
                            key={i}
                            className="w-[4px] h-[4px] sm:w-[5px] sm:h-[5px] md:w-[6px] md:h-[6px] rounded-full bg-white/20"
                        />
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 sm:px-6 py-10">

                {/* Logo */}
                <img
                    src="/latpatContent.png"
                    alt="Latpay"
                    className="
                        w-[150px]
                        sm:w-[180px]
                        md:w-[220px]
                        lg:w-[260px]
                        object-contain
                    "
                />

                {/* Title */}
                <h1
                    className="
                        mt-5
                        text-white
                        font-bold
                        tracking-[1px]
                        text-[24px]
                        sm:text-[30px]
                        md:text-[38px]
                        lg:text-[42px]
                        text-center
                        leading-tight
                    "
                >
                    Latpay CFM
                </h1>

                {/* Subtitle */}
                <p
                    className="
                        mt-6
                        text-white
                        font-medium
                        text-[13px]
                        sm:text-[15px]
                        md:text-[17px]
                        lg:text-[21px]
                        text-center
                    "
                >
                    Client Funds Management
                </p>

                {/* Gradient Divider */}
                <div className="mt-6 sm:mt-8">
                    <div className="w-[140px] sm:w-[180px] md:w-[200px] h-[4px] rounded-full bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-500" />
                </div>

                {/* Description  */}
                <p
                    className="
                        mt-6
                        text-center
                        text-white/90
                        text-[13px]
                        sm:text-[14px]
                        md:text-[15px]
                        max-w-md
                    "
                >
                    Secure. Transparent. Real-time financial control.
                </p>

                {/* Features */}
                <div
                    className="
                        mt-12
                        sm:mt-16
                        md:mt-20
                        flex
                        flex-col
                        md:flex-row
                        items-center
                        justify-center
                        gap-8
                        md:gap-10
                        lg:gap-16
                        xl:gap-24
                        w-full
                        max-w-6xl
                    "
                >

                    {/* Secure */}
                    <div className="flex items-start gap-4 w-full max-w-[220px]">
                        <div className="w-[38px] h-[58px] rounded-[20px] border border-cyan-400 flex items-center justify-center shrink-0">
                            <img
                                src="/secure.png"
                                alt="Secure"
                                className="w-[22px] md:w-[28px] h-[22px] md:h-[28px] object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-[14px] md:text-[18px]">
                                Secure
                            </h3>

                            <p className="text-white/70 text-[11px] md:text-[12px] leading-4">
                                Bank-grade
                                <br />
                                security
                            </p>
                        </div>
                    </div>

                    {/* Transparent */}
                    <div className="flex items-start gap-4 w-full max-w-[220px]">
                        <div className="w-[38px] h-[58px] rounded-[20px] border border-purple-400 flex items-center justify-center shrink-0">
                            <img
                                src="/transparent.png"
                                alt="Transparent"
                                className="w-[22px] md:w-[28px] h-[22px] md:h-[28px] object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-[14px] md:text-[18px]">
                                Transparent
                            </h3>

                            <p className="text-white/70 text-[11px] md:text-[12px] leading-4">
                                Real-time visibility
                                <br />
                                and insights
                            </p>
                        </div>
                    </div>

                    {/* Real-time */}
                    <div className="flex items-start gap-4 w-full max-w-[220px]">
                        <div className="w-[38px] h-[58px] rounded-[20px] border border-pink-400 flex items-center justify-center shrink-0">
                            <img
                                src="/realtime.png"
                                alt="Real Time"
                                className="w-[22px] md:w-[28px] h-[22px] md:h-[28px] object-contain"
                            />
                        </div>

                        <div>
                            <h3 className="text-white font-bold text-[14px] md:text-[18px]">
                                Real-time
                            </h3>

                            <p className="text-white/70 text-[11px] md:text-[12px] leading-4">
                                Always up to date
                                <br />
                                information
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}
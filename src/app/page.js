import LandingPage from "./Landing/page";
import LoginPage from "./Login/page";

export default function MainPage() {
    return (
        <div className="flex flex-col lg:flex-row min-h-screen w-full">
            <div className="w-full lg:w-1/2 h-screen">
                <LandingPage />
            </div>

            <div className="w-full lg:w-1/2 min-h-screen bg-gray-100 flex items-center justify-center">
                <LoginPage />
            </div>
        </div>
    );
}
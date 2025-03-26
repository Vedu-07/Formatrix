import Button from "../_components/Button"; 
import {
    RegisterLink,
  } from "@kinde-oss/kinde-auth-nextjs/components"; 
export default function Hero() {
    return (
        <section className="py-24 ">
            <div className="container">
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-300 to-pink-400 rounded-full text-neutral-950 font-semibold">
                        ✨Drag. Drop. Dominate.
                    </div>
                </div>
                <h1 className="text-6xl md:text-7xl  lg:text-8xl font-medium text-center mt-6 ">
                Smart Forms, Big Impact, Limitless Reach!
                </h1>
                <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                    Create, Customize, and Conquer. Build forms that don't just
                    collect data—they dominate, drive decisions, and leave an
                    impact.
                </p>
                <div className="flex gap-4 mt-8 justify-center items-center">
                <RegisterLink>
                <Button
                    variant="primary"
                    className=" md:inline-flex items-center"
                    size="sm"
                >
                    Get Started
                </Button>
                </RegisterLink>
                </div>
            </div>
        </section>
    );
}

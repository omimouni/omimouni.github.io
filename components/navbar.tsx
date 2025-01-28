"use client";

import TransitionLink from "./transition-link";

export default function Navbar() {
    return <div className="py-3 fixed top-0 left-0 z-50 right-0 pointer-events-none text-gray-900">
        <div className="wrapper">
            <div className="flex justify-between items-center">
                <div className="pointer-events-auto">
                    <TransitionLink href="/">
                        <span className="uppercase font-semibold text-gray-800">Oumar M.</span>
                    </TransitionLink>
                </div>

                <div className="py-3 px-10  rounded-full pointer-events-auto bg-white/50 backdrop-blur-sm">
                    <ul className="flex gap-5">
                        <li><TransitionLink href="/">
                            <span>About</span>
                        </TransitionLink></li>
                        <li><TransitionLink href="/works">
                            <span>Works</span>
                        </TransitionLink></li>
                        <li><TransitionLink href="/blog">
                            <span>Blog</span>
                        </TransitionLink></li>
                        <li><TransitionLink href="/contact">
                            <span>Contact</span>
                        </TransitionLink></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>;
}

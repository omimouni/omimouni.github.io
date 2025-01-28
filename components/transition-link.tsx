"use client";

import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function TransitionLink({ children, href, ...props }: { children: React.ReactNode, href: string }) {
    const router = useRouter();

    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        // Create timeline for better control
        const tl = gsap.timeline();
        
        try {
            // Fade out
            await tl.fromTo("#content", {
                opacity: 1,
            }, {
                opacity: 0,
                duration: 0.5,
                ease: "power2.inOut",
            }).then();

            // Navigate
            router.push(href);

            // Fade in after navigation
            gsap.fromTo("#content", {
                opacity: 0,
            }, {
                opacity: 1,
                duration: 0.5,
                ease: "power2.inOut",
            });
        } catch (error) {
            console.log(error);
            // If anything fails, ensure content is visible
            gsap.set("#content", { opacity: 1 });
        }
    }

    return <Link onClick={handleTransition} href={href} {...props}>{children}</Link>;
}

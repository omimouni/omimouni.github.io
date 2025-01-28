import gsap from "gsap";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function TransitionLink({ children, href, ...props }: { children: React.ReactNode, href: string }) {
    const router = useRouter();


    const handleTransition = async (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        e.preventDefault();

        const tl = gsap.timeline();
        tl.to("#content", {
            duration: 0.5,
            ease: "power2.inOut",
            opacity: 0,
            onComplete: () => {
                router.push(href);
            }
        });

        tl.to("#content", {
            duration: 0.5,
            opacity: 1,
            ease: "power2.inOut"
        });
    }

    return <Link onClick={handleTransition} href={href} {...props}>{children}</Link>;
}

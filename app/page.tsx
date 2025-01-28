import ThreeJSCanvas from "@/components/threejs-canvas";

export const metadata = {
  title: "Oumar M. | Frontend & Interactive Developer",
}
export default function Home() {
  return (
    <div className="wrapper text-gray-900">

      <div className="flex items-center py-32 md:py-32 py-20">
        <div className="relative w-full">
          <h4 className="text-9xl md:text-9xl text-5xl relative z-30 flex flex-col leading-none uppercase font-black">
            <span className="">Full Stack</span>
            <span className="">Interactive</span>
            <span className="">Developer</span>
          </h4>
          <div className="absolute right-0 w-1/2 md:w-1/2 w-full -z-10 top-1/2 -translate-y-1/2 aspect-square">
            <ThreeJSCanvas />
          </div>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-between items-start py-10 gap-8">
        <div className="md:h-full h-64 bg-red-200 rounded-xl overflow-hidden md:w-auto w-full">
          <img className="w-full h-full object-cover" src="https://avatars.githubusercontent.com/u/19931927?v=4" alt="" />
        </div>

        <div className="md:w-1/2 w-full">
          <div className="px-4">
            <p className="text-xl md:w-4/5 w-full">
              I&apos;m Oumar, a full-stack developer with over +4 years of experience. My work focuses on crafting responsive, user-friendly, and high-performance web applications. I specialize in React and modern front-end frameworks, with strong expertise in Node.js and Python, allowing me to build seamless, scalable, and efficient solutions.
            </p>
            <div className="flex md:flex-row flex-col text-sm mt-7 gap-3">
              <div className="w-full">
                <h4 className="font-semibold">Web Development</h4>
                <p className="text-gray-500 mt-2">
                  Web development is more than just a career for me—it&apos;s a passion. I excel at creating intuitive and interactive user interfaces that enhance user experiences while maintaining accessibility and cross-platform compatibility. Whether it&apos;s building SPAs (Single Page Applications) or managing backend APIs, I deliver robust and scalable systems tailored to client needs.
                </p>
              </div>

              <div className="w-full">
                <h4 className="font-semibold">Creative Coding</h4>
                <p className="text-gray-500 mt-2">
                  Beyond traditional development, I love experimenting with creative coding, exploring ways to merge technology and art. From interactive visualizations to generative design, I use coding as a medium to innovate and inspire. Tools like p5.js and Three.js empower me to craft immersive, engaging experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

import Image from "next/image";


function SkillIcon({ icon, slug }: { icon: string, slug?: string }) {
  const url = "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/" + icon + "/" + (slug ? slug : icon + "-original") + ".svg"
  return <Image src={url} alt={icon} width={40} height={40} />;
}

export default function Home() {
  return (
    <>
      <div className="">
        <div className="wrapper">
          <div className="flex items-center">
            <div className="">
              <h1 className="text-4xl md:text-6xl font-black mt-2 leading-none">
                <span className="block">Full Stack</span>
                <span className="block">Software Engineer</span>
              </h1>
              <div className="space-y-4 mt-10 w-full md:w-2/3">
                <p>
                  Hey there! I&apos;m Oumar, a full-stack developer with over 4 years of experience. I specialize in React and modern front-end frameworks, with strong expertise in Node.js and Python. I&apos;m passionate about building impactful solutions with clean, efficient code.
                </p>

              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10">
        <div className="wrapper">
          <h2 className="text-4xl font-black">Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-5">
            <div className="">
              <h4 className=" text-gray-500 font-bold">Programming & Markup languages</h4>

              <div className="gap-2 flex flex-wrap mt-2">
                <SkillIcon icon="c" />
                <SkillIcon icon="cplusplus" />
                <SkillIcon icon="python" />
                <SkillIcon icon="javascript" />
                <SkillIcon icon="typescript" />
                <SkillIcon icon="html5" />
                <SkillIcon icon="css3" />
                <SkillIcon icon="bash" />
                <SkillIcon icon="php" />
                <SkillIcon icon="csharp" />
              </div>

            </div>

            <div>
              <h4 className=" text-gray-500 font-bold">Frameworks & Libraries</h4>

              <div className="flex flex-wrap gap-2 mt-2">
                <SkillIcon icon="tailwindcss" />
                <SkillIcon icon="laravel" />
                <SkillIcon icon="nextjs" />
                <SkillIcon icon="react" />
                <SkillIcon icon="nodejs" />
                <SkillIcon icon="express" />
                <SkillIcon icon="arduino" />
                <SkillIcon icon="redux" />
                <SkillIcon icon="socketio" />
                <SkillIcon icon="jest" slug="jest-plain" />
                <SkillIcon icon="mocha" />
                <SkillIcon icon="cypressio" />
                <SkillIcon icon="discordjs" />
              </div>
            </div>

            <div>
              <h4 className=" text-gray-500 font-bold">Databases & Cloud</h4>

              <div className="flex flex-wrap gap-2 mt-2">
                <SkillIcon icon="mysql" />
                <SkillIcon icon="digitalocean" />
                <SkillIcon icon="postgresql" />
                <SkillIcon icon="mongodb" />
                <SkillIcon icon="firebase" />
                <SkillIcon icon="amazonwebservices" slug="amazonwebservices-plain-wordmark" />
                <SkillIcon icon="prisma" />
                <SkillIcon icon="docker" />
              </div>
            </div>

            <div>
              <h4 className=" text-gray-500 font-bold">Tools & Software</h4>

              <div className="flex flex-wrap gap-2 mt-2">
                <SkillIcon icon="git" />
                <SkillIcon icon="github" />
                <SkillIcon icon="xd" />
                <SkillIcon icon="figma" />
                <SkillIcon icon="postman" />
                <SkillIcon icon="git" />
                <SkillIcon icon="vscode" />
                <SkillIcon icon="ubuntu" />
              </div>
            </div>
          </div>
        </div>
      </div>


  
    </>
  );
}

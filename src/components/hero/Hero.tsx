import Image from "next/image";

const Hero = () => {
  return (
    <section className="overflow-hidden">
      <div className="max-w-[1150px] mx-auto">
        <div className="mt-20 grid grid-cols-2">
          <div className="flex flex-col justify-end">
            <div className="text-4xl font-light opacity-70">
              FULL-STACK WEB DEVELOPER
            </div>

            <h1 className="text-9xl font-semibold flex flex-col">
              <span>Aman Raj</span>
              <span>Rana</span>
            </h1>

            <div className="mt-20 text-2xl font-light border-l-2 border-l-white pl-4 max-w-[250px] opacity-80">
              I&lsquo;m a full-stack web developer and I work remotely form
              India
            </div>
          </div>
          <div className="w-full h-full flex items-end justify-center">
            <div className="relative">
              <Image
                src={"/image/aman.png"}
                height={617}
                width={537}
                alt="aman"
                className=""
              />
              <div className="h-[700px] aspect-square rounded-full translate-x-1/2 right-1/2 -z-10 absolute -bottom-1/3 border-[3px] border-t-transparent border-fuchsia-700 p-4">
                <div className="bg-purple-800 w-full h-full rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-y-16 absolute top-72 w-max -left-4 h-full -z-10">
        <div className="h-1.5 relative rotate-45 w-20 bg-purple-700"></div>
        <div className="h-1.5 relative rotate-45 w-20 bg-purple-700"></div>
        <div className="h-1.5 relative rotate-45 w-20 bg-purple-700"></div>
        <div className="h-1.5 relative rotate-45 w-20 bg-purple-700"></div>
      </div>
    </section>
  );
};

export default Hero;

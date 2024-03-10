import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat py-16 px-8 flex flex-col-reverse justify-center items-center sm:flex-row lg:items-start max-lg:flex-col w-full h-[100vh]">
      <div className="flex justify-center items-center sm:justify-start sm:items-start lg:flex-col lg:gap-5 lg:items-start z-10">
        <div className="flex flex-col items-center sm:items-start">
          <Image
            src="/logo.png"
            alt="logo"
            width={150}
            height={150}
            className="object-contain"
          />
          <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%] text-shadow text-center sm:text-left">
            Delve into <span className="red-gradient">Vast Depths</span> of
            Anime Tales
          </h1>
        </div>
      </div>
      <div className="w-full max-w-lg flex justify-center sm:justify-end z-0">
        <Image src="/denji.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
}

export default Hero;

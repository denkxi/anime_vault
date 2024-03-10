import Image from "next/image";

function Footer() {
  return (
    <footer className="sm:px-16 py-4 px-8 flex justify-center items-center gap-2 flex-wrap bg-[#161921]">
      <p className="text-base font-bold text-white">@2024 Anishu</p>
      <Image
        src='/logo.png'
        alt="logo"
        width={47}
        height={44}
        className="object-contain rounded-full"
      />
    </footer>
  );
}

export default Footer;

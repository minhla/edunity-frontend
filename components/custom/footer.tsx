import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-edunity-black text-white">
      <div className="content-wrapper">
        <div className="flex flex-col md:flex-row items-center justify-center min-h-[80px] gap-2">
          <div className="md:after:content-['||'] md:after:relative md:after:ml-2">
            <span> Copyright © 2024 </span>
            <Link href="/" className="text-edunity-primary font-body font-bold">
              <span>edunity</span>
            </Link>
          </div>

          <span> All Rights Reserved</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-edunity-black text-white">
      <div className="content-wrapper">
        <div className="flex items-center justify-center min-h-[80px] gap-1">
        <span> Copyright © 2024 </span>
        <Link href="/" className="text-edunity-primary font-body font-bold">
          <span>edunity</span>
        </Link>
        <span> || All Rights Reserved</span>
        </div>
       
      </div>
    </footer>
  );
};

export default Footer;
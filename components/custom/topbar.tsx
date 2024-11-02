"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Search } from "lucide-react";

import logo from "../../public/logo-A.svg";
import { Input } from "../ui/input";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
];

const Topbar = () => {
  const pathname = usePathname();
  const isActive = (href: string): boolean => pathname === href;
  const isActiveClass =
    "text-edunity-primary border border-edunity-primary text-edunity-primary";
  return (
    <div className="content-wrapper shadow-sm">
      <div className="py-4 grid grid-cols-3">
        <Link href="/">
          <Image src={logo} alt="Edunity" height={54} />
        </Link>
        <nav className="flex gap-4 items-center">
          {links.map(({ href, label }) => {
            const isActiveLink = isActive(href);
            return (
              <Link
                key={`${href}${label}`}
                href={href}
                className={`rounded-full px-6 py-1 ${
                  isActiveLink && isActiveClass
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>
        <div className="relative">
          <Input
            placeholder="Search courses"
            className="w-[360px] h-[52px] rounded-full px-8 border-edunity-black"
          />
          <div className="absolute right-6 top-12 -translate-y-8 hover:cursor-pointer">
            <Search className="stroke-edunity-black size-5" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

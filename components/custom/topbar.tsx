"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { Search, Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "../ui/input";

import logo from "../../public/logo-A.svg";

const links = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
];

const Topbar = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const [inputValue, setInputValue] = React.useState<string>(
    searchParams.get("keywords") || ""
  );

  React.useEffect(() => {
    setInputValue(searchParams.get("keywords") || "");
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      router.push(`/courses?keywords=${encodeURIComponent(inputValue)}`);
    } else {
      router.push("/courses");
    }
  };

  const isActive = (href: string): boolean => pathname === href;
  const isActiveClass =
    "text-edunity-primary border border-edunity-primary text-edunity-primary";

  return (
    <div className="w-full">
      <div className="content-wrapper">
        <div className="py-4 flex justify-between items-center">
          <Link href="/">
            <Image src={logo} alt="Edunity" height={55} />
          </Link>
          <nav className="hidden md:flex gap-4 items-center justify-center">
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
          <div className="relative hidden md:block">
            <form onSubmit={handleSearch}>
              <Input
                placeholder="Search courses"
                className="w-[260px] lg:w-[360px] h-[52px] rounded-full px-8 border-edunity-black"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <div className="absolute right-6 top-12 -translate-y-8 hover:cursor-pointer" onClick={handleSearch}>
                <Search className="stroke-edunity-black size-5 cursor-pointer" />
              </div>
            </form>
          </div>

          <Sheet>
            <SheetTrigger className=" md:hidden">
              <Menu />
            </SheetTrigger>
            <SheetContent>
              <SheetHeader className="flex flex-col gap-5 pt-8">
                <div className="relative">
                  <Input
                    placeholder="Search courses"
                    className="rounded-full px-6 border-edunity-black"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                  <div className="absolute right-6 top-12 -translate-y-10 hover:cursor-pointer" onClick={handleSearch}>
                    <Search className="stroke-edunity-black size-5" />
                  </div>
                </div>
                <div className="flex flex-col">
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
                </div>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </div>
  );
};

export default Topbar;

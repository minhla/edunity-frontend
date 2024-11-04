"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

const SearchBar = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [inputValue, setInputValue] = useState<string>(
    searchParams.get("keywords") || ""
  );

  useEffect(() => {
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

  return (
    <div className="relative">
      <form onSubmit={handleSearch}>
        <Input
          placeholder="Search courses"
          className="rounded-full px-6 border-edunity-black"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <div className="absolute right-6 top-12 -translate-y-10 hover:cursor-pointer">
          <Search className="stroke-edunity-black size-5" />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;

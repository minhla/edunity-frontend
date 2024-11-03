import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";

const SectionHero = () => {
  return (
    <div className="bg-hero flex flex-col lg:flex-row min-h-[720px]">
      <div className="flex items-center">
        <div className="flex flex-col gap-5 p-5 xl:pl-[calc((100vw-var(--max-content-width))/2)] xl:pr-[calc((100vw-var(--max-content-width))/3)]">
          <h2 className="uppercase text-edunity-primary">
            Welcome to Edunity online courses
          </h2>
          <h1 className="text-edunity-secondary capitalize font-bold text-5xl">
            Achieving Your Dreams Through Education
          </h1>
          <p className="mt-4 w-[60%]">
            We are experienced in education platform and skilled strategies for
            the success of our online learning.
          </p>
          <Button className="text-lg py-7 bg-edunity-secondary hover:bg-edunity-secondary text-white rounded-full relative overflow-hidden group transition-all duration-300 ease-in-out w-[200px] hover:w-[230px]">
            <span className="relative group-hover:mr-2 transition-all duration-300 ease-in-out">
              Find Courses
            </span>
            <GraduationCap className="absolute right-6 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0" />
          </Button>
        </div>
      </div>
      <div className="basis-[40%] relative flex-1">
        <Image
          src="/hero.jpg"
          alt="Photo of students"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SectionHero;

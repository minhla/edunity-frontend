import Image from "next/image";
import { Button } from "@/components/ui/button";
import { GraduationCap } from "lucide-react";
import Link from "next/link";

const SectionHero = () => {
  return (
    <div className="bg-hero flex flex-col lg:flex-row min-h-[720px]">
      <div className="flex items-center">
        <div className="flex flex-col gap-5 p-5 xl:pl-[calc((100vw-var(--max-content-width))/2)] xl:pr-[20%]">
          <h2 className="uppercase text-edunity-primary font-body">
            Welcome to Edunity online courses
          </h2>
          <h1 className="text-edunity-secondary capitalize font-bold text-5xl leading-[60px]">
            Achieving Your Dreams Through Education
          </h1>
          <p className="mt-4 w-[70%]">
            We are experienced in education platform and skilled strategies for
            the success of our online learning.
          </p>
          <Button
            asChild
            className="text-md py-7 bg-edunity-secondary hover:bg-edunity-secondary text-white rounded-full relative overflow-hidden group transition-all duration-300 ease-in-out w-[200px] hover:w-[230px]"
          >
            <Link href="/courses">
              <span className="relative group-hover:mr-2 transition-all duration-300 ease-in-out">
                Find Courses
              </span>

              <GraduationCap className="absolute right-6 w-10 h-10 opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out transform translate-x-full group-hover:translate-x-0" />
            </Link>
          </Button>
        </div>
      </div>
      <div className="basis-[40%] relative flex-1">
        <Image
          src="/hero.jpg"
          alt="Photo of students"
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default SectionHero;

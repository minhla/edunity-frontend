import { Suspense } from "react";
import Link from "next/link";

import { createUrlWithParams } from "./utils";
import CourseCard from "@/components/custom/courseCard";
import SearchBar from "./components/searchbar";
import CoursePagination from "./components/searchPagination";
import { Button } from "@/components/ui/button";

type Course = {
  _id: string;
  title: string;
  categories: string[];
  cover_image: string;
  price: number;
  rating: number;
};

type CourseSearchMetadata = {
  page: number;
  perPage: number;
  totalItems: number;
};

const searchCourses = async (
  searchUrl: string
): Promise<{
  data: Course[];
  meta: CourseSearchMetadata;
}> => {
  const res = await fetch(searchUrl);
  const responseJSON = await res.json();
  return responseJSON;
};

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CoursesPage({ searchParams }: PageProps) {
  const searchURL = await createUrlWithParams(
    `${process.env.API_ROOT_URL}/search`,
    searchParams
  );
  const { data: coursesResult, meta } = await searchCourses(searchURL);

  return (
    <div>
      <div className="w-full h-[250px] bg-coursesPageHeader flex items-center justify-center">
        <h1 className="text-edunity-secondary uppercase text-5xl font-bold font-heading">
          All Courses
        </h1>
      </div>
      <div className="content-wrapper py-24 flex flex-col gap-10">
        <div className="relative">
          <Suspense>
            <SearchBar />
          </Suspense>
        </div>
        <Button
          asChild
          className="w-fit rounded-full bg-edunity-primary text-white px-4 py-2"
        >
          <Link href="/courses/create">Create course</Link>
        </Button>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {coursesResult.map((course) => {
            return <CourseCard key={course._id} course={course} />;
          })}
          {coursesResult.length === 0 && <p>No courses found.</p>}
        </div>
        <div>
          <Suspense>
            <CoursePagination meta={meta} />
          </Suspense>
        </div>
      </div>
    </div>
  );
}

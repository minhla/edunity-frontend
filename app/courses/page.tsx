import { createUrlWithParams } from "./utils";
import CourseCard from "@/components/custom/courseCard";
import SearchBar from "./components/searchbar";

type Course = {
  _id: string;
  title: string;
  categories: string[];
  cover_image: string;
  price: number;
  rating: number;
};

const searchCourses = async (searchUrl: string): Promise<Course[]> => {
  const res = await fetch(searchUrl);
  const responseJSON = await res.json();
  return responseJSON.data;
};

type PageProps = {
  searchParams: { [key: string]: string | string[] | undefined };
};

export default async function CoursesPage({
  searchParams,
}: PageProps) {
  const keywords = typeof searchParams.keywords === "string" ? searchParams.keywords : "";

  const searchURL = await createUrlWithParams(
    `${process.env.API_ROOT_URL}/search`,
    searchParams
  );
  const coursesResult = await searchCourses(searchURL);

  return (
    <div>
      <div className="w-full h-[250px] bg-coursesPageHeader flex items-center justify-center">
        <h1 className="text-edunity-secondary uppercase text-5xl font-bold font-heading">
          All Courses
        </h1>
      </div>
      <div className="content-wrapper py-24 flex flex-col gap-10">
        <div className="relative">
          <SearchBar />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {coursesResult.map((course) => {
            return <CourseCard key={course._id} course={course} />;
          })}
          {coursesResult.length === 0 && (
            <p>No courses found.</p>
          )}
        </div>
      </div>
    </div>
  );
}

import CourseCard from "@/components/custom/courseCard";
import { Button } from "@/components/ui/button";

type Course = {
  _id: string;
  title: string;
  cover_image: string;
  categories: string[];
  rating: number;
  price: number;
};

const fetchTopCourses = async (): Promise<Course[]> => {
  const res = await fetch(`${process.env.API_ROOT_URL}/rated`);
  const responseJSON = await res.json();
  return responseJSON.data;
};

const SectionCourses = async () => {
  const courses = await fetchTopCourses();

  return (
    <div className="bg-courses bg-cover py-24">
      <div className="content-wrapper flex flex-col gap-10">
      <div className="uppercase font-body bg-[#E9E2FF] rounded-lg text-edunity-primary w-fit px-4 py-1">
        Top Rated Courses
      </div>
      <div className="flex justify-between">
        <h1 className="text-edunity-secondary text-4xl font-bold w-1/2">
          Edunity Courses Student Can Join With Us.
        </h1>
        <Button className="rounded-full text-white bg-edunity-primary font-body font-normal hover:bg-[#9076ED] px-6 py-5">
          Load more courses
        </Button>
      </div>
      <div className="grid grid-cols-1 grid-flow-col lg:grid-cols-3 lg:grid-flow-row gap-7">
        {courses.map((course) => {
          return <CourseCard key={course._id} course={course} />;
        })}
      </div>
      </div>
    </div>
  );
};

export default SectionCourses;

import CreateCourseForm from "./components/form";

export default function CreateCoursePage() {
  return (
    <div>
      <div className="w-full h-[250px] bg-coursesPageHeader flex items-center justify-center">
        <h1 className="text-edunity-secondary uppercase text-5xl font-bold font-heading">
          New Course
        </h1>
      </div>
      <div className="content-wrapper py-24 flex flex-col gap-10">
      <CreateCourseForm />
      </div>
    </div>
  );
}

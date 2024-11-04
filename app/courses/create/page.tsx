import CreateCourseForm from "./components/form";

export default function CreateCoursePage() {
  return (
    <div>
      <div className="w-full h-[250px] bg-coursesPageHeader flex items-center justify-center">
        <h1 className="text-edunity-secondary uppercase text-5xl font-bold font-heading">
          New Course
        </h1>
      </div>
      <div className="py-24">
      <div className="content-wrapper bg-edunity-grey">
        <div className="p-5 lg:p-20 flex flex-col gap-5">
        <h2 className="uppercase text-edunity-secondary text-2xl font-bold">Add New Course</h2>
        <CreateCourseForm />
        </div>
    
      </div>
      </div>
    </div>
  );
}

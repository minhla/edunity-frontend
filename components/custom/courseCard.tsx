import Image from "next/image";
import { Rating } from "@smastrom/react-rating";
import { Trash } from "lucide-react";
import { Button } from "../ui/button";
import DeleteButton from "./deleteButton";

type Course = {
  _id: string;
  title: string;
  cover_image: string;
  categories: string[];
  rating: number;
  price: number;
};

type CourseCardProps = {
  course: Course;
};

const formatPrice = (price: number) => `$${(price / 100).toFixed(2)}`;

type CategoryCardProps = {
  category: string;
};

const handleDeleteCourse = async (courseId: string) => {
  console.log("🚀 ~ handleDeleteCourse ~ courseId:", courseId);
  const res = await fetch(`${process.env.API_ROOT_URL}/delete/${courseId}`, {
    method: "DELETE",
  });
  const responseJSON = await res.json();
  return responseJSON.data;
};

const CategoryCard = ({ category }: CategoryCardProps) => {
  return (
    <div className="bg-edunity-secondary px-5 py-2 rounded-md text-white text-sm">
      {category}
    </div>
  );
};

const CourseCard = ({ course }: CourseCardProps) => {
  const { _id, title, cover_image, categories, rating, price } = course;
  return (
    <div className="border border-dashed border-edunity-primary rounded-md p-6 flex flex-col gap-6 relative">
      <div className="min-h-[250px] relative p-5">
        <Image
          src={cover_image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover rounded-md"
        />
        <div className="flex gap-3 absolute bottom-4">
          {categories.map((category) => {
            return <CategoryCard key={category} category={category} />;
          })}
        </div>
      </div>
      <div className="w-2/5 flex items-center justify-center gap-2">
        <Rating value={rating} readOnly />
        <span>{rating}</span>
      </div>
      <h4 className="font-body font-semibold text-xl leading-7 text-edunity-secondary">
        {title}
      </h4>
      <div className="flex flex-col flex-1">
        <div className="mt-auto font-body font-semibold text-edunity-primary text-2xl">
          {formatPrice(price)}
        </div>
        <DeleteButton courseId={_id} />
      </div>
    </div>
  );
};

export default CourseCard;

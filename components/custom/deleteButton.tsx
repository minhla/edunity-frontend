"use client";
import { Button } from "../ui/button";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";



const DeleteButton = ({ courseId }: { courseId: string }) => {
  const router = useRouter();

  const handleDeleteCourse = async (courseId: string) => {
    console.log("🚀 ~ handleDeleteCourse ~ courseId:", courseId);
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_ROOT_URL}/delete/${courseId}`, {
      method: "DELETE",
    });
    const responseJSON = await res.json();
    console.log("🚀 ~ handleDeleteCourse ~ responseJSON:", responseJSON);
    router.refresh();
  };

  return (
    <Button
      className="bg-edunity-danger absolute bottom-6 right-6"
      size="icon"
      onClick={() => handleDeleteCourse(courseId)}
    >
      <Trash />
    </Button>
  );
};

export default DeleteButton;
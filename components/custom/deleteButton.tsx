"use client";

import { Trash } from "lucide-react";
import { useRouter, usePathname } from "next/navigation";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

const DeleteButton = ({ courseId }: { courseId: string }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleDeleteCourse = async (courseId: string) => {
    await fetch(`/courses/api/delete/${courseId}?path=${pathname}`, {
      method: "DELETE",
    });
    router.refresh();
  };

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button
          className="bg-edunity-danger absolute bottom-6 right-6"
          size="icon"
        >
          <Trash />
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>
            Deleted courses cannot be recovered.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex flex-col gap-2">
          <AlertDialogAction
            className="rounded-full px-4 py-2 bg-edunity-primary text-white"
            onClick={() => handleDeleteCourse(courseId)}
          >
            Confirm
          </AlertDialogAction>
          <AlertDialogCancel className="rounded-full px-4 py-2 border-edunity-primary">
            Cancel
          </AlertDialogCancel>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DeleteButton;

import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const id = params.id;
  const res = await fetch(`${process.env.API_ROOT_URL}/delete/${id}`, {
    method: "DELETE",
  });

  const pathToRevalidate = request.nextUrl.searchParams.get("path");
  if (pathToRevalidate) {
    revalidatePath(pathToRevalidate);
  }
  return Response.json(res);
}

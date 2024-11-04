import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();
  const res = await fetch(`${process.env.API_ROOT_URL}/create`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({params: {...body}}),
  });
  const responseJSON = await res.json();
  return Response.json(responseJSON);
}

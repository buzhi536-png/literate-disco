import { getCards } from "@/lib/cards";

export async function GET() {
  return Response.json(getCards());
}

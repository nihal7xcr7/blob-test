import { put } from "@vercel/blob";

export async function POST(request) {
  const form = await request.formData();
  const file = form.get("file");

  if (!file) {
    return Response.json({ error: "No file" }, { status: 400 });
  }

  const blob = await put(file.name, file, {
    access: "public"
  });

  return Response.json({
    url: blob.url
  });
}

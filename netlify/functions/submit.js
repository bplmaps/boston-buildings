import { createClient } from "@libsql/client";

export default async function handler(req) {
  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405 });
  }

  const { user, form_date, pid, building_date, source, email, lat, long } = await req.json();

  const turso = createClient({
    url: process.env.TURSO_DATABASE_URL,
    authToken: process.env.TURSO_WRITE_TOKEN,
  });

  console.log("Turso URL:", process.env.TURSO_DATABASE_URL);
  console.log("Token defined?", !!process.env.TURSO_WRITE_TOKEN);

  try {
    await turso.execute({
      sql: `
        INSERT INTO forms (
          user, form_date, pid, building_date, source, email, lat, long
        )
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `,
      args: [user, form_date, pid, building_date, source, email, lat, long],
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

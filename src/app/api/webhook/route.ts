export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("📩 Webhook recebido da Kiwify:", body);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("❌ Erro no webhook:", err);
    return new Response(JSON.stringify({ error: "Erro interno" }), {
      status: 500,
    });
  }
}

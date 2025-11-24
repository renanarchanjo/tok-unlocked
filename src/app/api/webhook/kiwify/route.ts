export async function GET() {
  return Response.json({ ok: true, message: "Webhook ativo!" });
}

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("📩 Webhook recebido da Kiwify:", body);

    return Response.json({ ok: true });
  } catch (error) {
    console.error("❌ Erro no webhook:", error);
    return Response.json({ error: "Erro interno" }, { status: 500 });
  }
}

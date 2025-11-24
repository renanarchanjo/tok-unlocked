export const runtime = "edge"; // garante compatibilidade com Lasy/Vercel

export async function GET() {
  return new Response(
    JSON.stringify({ ok: true, message: "Webhook ativo!" }),
    { status: 200 }
  );
}

export async function POST(req) {
  try {
    // pegar token que vem pela URL
    const url = new URL(req.url);
    const token = url.searchParams.get("token");

    // validar o token
    if (token !== "sx1odunbq8d") {
      return new Response(
        JSON.stringify({ error: "Não autorizado - Token inválido" }),
        { status: 401 }
      );
    }

    // pegar body enviado pela Kiwify
    const body = await req.json();
    console.log("📩 Webhook recebido da Kiwify:", body);

    // retornar sucesso
    return new Response(
      JSON.stringify({ ok: true, recebido: true }),
      { status: 200 }
    );
  } catch (error) {
    console.error("❌ Erro ao processar webhook:", error);
    return new Response(
      JSON.stringify({ error: "Erro interno no servidor" }),
      { status: 500 }
    );
  }
}

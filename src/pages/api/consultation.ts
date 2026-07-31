import type { NextApiRequest, NextApiResponse } from "next";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { fullName, email, phone, url, company, description } =
    req.body ?? {};

  if (!fullName || !email || !phone || !url || !description) {
    return res.status(400).json({ error: "Missing required fields" });
  }

  try {
    await resend.emails.send({
      // Mientras no tengas tu dominio verificado en Resend, usa este remitente de pruebas.
      from: "Nalabs Website <onboarding@resend.dev>",
      to: process.env.CONTACT_EMAIL as string,
      replyTo: email,
      subject: `Nueva solicitud de consulta web — ${fullName}`,
      html: `
        <h2>Nueva solicitud de consulta web</h2>
        <p><strong>Nombre:</strong> ${escapeHtml(fullName)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Teléfono:</strong> ${escapeHtml(phone)}</p>
        <p><strong>URL del sitio web:</strong> ${escapeHtml(url)}</p>
        <p><strong>Empresa:</strong> ${company ? escapeHtml(company) : "-"}</p>
        <p><strong>Descripción:</strong><br/>${escapeHtml(description).replace(/\n/g, "<br/>")}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Resend error:", error);
    return res.status(500).json({ error: "Failed to send email" });
  }
}
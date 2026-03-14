import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req: any, res: any) {

    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body;

        const { data, error } = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: "swarooprout9848@gmail.com",
            subject: `New message from ${name}`,
            html: `
        <h2>New Portfolio Message</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            console.error("Resend API failed:", error);
            return res.status(400).json({ error });
        }

        return res.status(200).json({ success: true, data });

    } catch (error) {
        console.error("Internal Server Error:", error);
        return res.status(500).json({ error: "Email failed to send. Please try again." });
    }
}
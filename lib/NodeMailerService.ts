import nodemailer from "nodemailer";

const { NODEMAILER_PASSKEY, SENDER_EMAIL, RECEIVER_EMAIL } = process.env;

export default class NodeMailerService {
    private transporter;

    constructor() {
        this.transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: SENDER_EMAIL,
                pass: NODEMAILER_PASSKEY,
            },
        });
    }

    async sendMail(name: string, contact: string, content: string): Promise<void> {
        const mailOptions = {
            from: `"Portfolio Bot" <${SENDER_EMAIL}>`,
            to: RECEIVER_EMAIL,
            subject: `📩 New message from your portfolio by ${name}`,

            // Plain text fallback
            text: `
You have a new message from your portfolio contact form.

👤 Name: ${name}
📧 Contact: ${contact}

💬 Message:
${content}
            `,

            // HTML (beautifully formatted)
            html: `
                <div style="font-family: Arial, sans-serif; background:#f9f9f9; padding:20px; border-radius:10px; border:1px solid #ddd;">
                    <h2 style="color:#333; margin-bottom:10px;">📩 New message from your portfolio</h2>
                    <p><strong>👤 Name:</strong> ${name}</p>
                    <p><strong>📧 Contact:</strong> ${contact}</p>
                    <p><strong>💬 Message:</strong></p>
                    <div style="background:#fff; padding:15px; border-radius:8px; border:1px solid #eee; margin-top:8px;">
                        ${content}
                    </div>
                    <hr style="margin:20px 0;" />
                    <p style="font-size:12px; color:#777;">This email was automatically sent from your portfolio website. Please do not reply directly.</p>
                </div>
            `,
        };

        try {
            await this.transporter.sendMail(mailOptions);
            console.log("✅ Email sent successfully!");
        } catch (error) {
            console.error("❌ Error sending email:", error);
            throw error;
        }
    }
}

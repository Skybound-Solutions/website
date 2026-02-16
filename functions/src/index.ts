import { onRequest } from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

export const submitContact = onRequest({ cors: true }, async (req, res) => {
    if (req.method !== "POST") {
        res.status(405).send("Method Not Allowed");
        return;
    }

    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).send("Missing required fields");
        return;
    }

    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
        logger.error("DISCORD_WEBHOOK_URL is not set");
        res.status(500).send("Configuration error");
        return;
    }

    const embed = {
        title: "New Contact Form Submission",
        color: 0x38bdf8,
        fields: [
            { name: "Name", value: name || "N/A", inline: true },
            { name: "Email", value: email || "N/A", inline: true },
            { name: "Subject", value: subject || "N/A" },
            { name: "Message", value: message || "N/A" },
        ],
        timestamp: new Date().toISOString(),
    };

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                embeds: [embed],
            }),
        });

        if (response.ok) {
            res.status(200).send({ success: true });
        } else {
            logger.error("Discord error:", await response.text());
            res.status(502).send("Error sending to Discord");
        }
    } catch (error) {
        logger.error("Function error:", error);
        res.status(500).send("Internal Server Error");
    }
});

import { NextRequest, NextResponse } from 'next/server';

const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL;

export async function POST(request: NextRequest) {
    try {
        const { name, email, company, message } = await request.json();

        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        if (!DISCORD_WEBHOOK_URL) {
            console.error('DISCORD_WEBHOOK_URL not configured');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const embed = {
            title: '📬 New Contact Form Submission',
            color: 0x007AFF,
            fields: [
                { name: '👤 Name', value: name, inline: true },
                { name: '📧 Email', value: email, inline: true },
                ...(company ? [{ name: '🏢 Company', value: company, inline: true }] : []),
                { name: '💬 Message', value: message.substring(0, 1024) },
            ],
            timestamp: new Date().toISOString(),
            footer: { text: 'Skybound Solutions — skyboundmi.com' },
        };

        const discordRes = await fetch(DISCORD_WEBHOOK_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'Skybound Website',
                embeds: [embed],
            }),
        });

        if (!discordRes.ok) {
            console.error('Discord webhook failed:', discordRes.status);
            return NextResponse.json({ error: 'Failed to deliver message' }, { status: 500 });
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact form error:', error);
        return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
    }
}

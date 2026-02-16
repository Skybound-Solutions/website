import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { name, email, company, budget, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 },
            );
        }

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            console.error('DISCORD_WEBHOOK_URL not configured');
            return NextResponse.json(
                { error: 'Server configuration error.' },
                { status: 500 },
            );
        }

        const embed = {
            title: '📬 New Contact Form Submission',
            color: 0x007aff,
            fields: [
                { name: 'Name', value: name, inline: true },
                { name: 'Email', value: email, inline: true },
                ...(company ? [{ name: 'Company', value: company, inline: true }] : []),
                ...(budget ? [{ name: 'Budget Range', value: budget, inline: true }] : []),
                { name: 'Message', value: message },
            ],
            timestamp: new Date().toISOString(),
        };

        const discordRes = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'Skybound Website',
                embeds: [embed],
            }),
        });

        if (!discordRes.ok) {
            console.error('Discord webhook failed:', discordRes.status);
            return NextResponse.json(
                { error: 'Failed to deliver message.' },
                { status: 502 },
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Contact API error:', error);
        return NextResponse.json(
            { error: 'Internal server error.' },
            { status: 500 },
        );
    }
}

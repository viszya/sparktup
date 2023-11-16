import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { env } from "@/env.mjs";
import VercelInviteUserEmail from '@/app/_components/email-template';
import { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const token = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, token);
const { phone, message } = { phone: '+14254920056', message: 'Hello World' };
console.log(phone, message);

export async function GET() {
    try {
        await client.messages
            .create({
                body: message,
                messagingServiceSid: process.env.TWILIO_MESSAGING_SSID,
                // from: '+1425217472',
                from: '+18442181558',
                to: phone,
            })
            .then((message) =>
                console.log("HELLO")
            )
            .catch((error) => {
                console.log(error);
            });
        return NextResponse.json({ message: message });
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}


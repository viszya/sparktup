import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { env } from "@/env.mjs";
import ContactEmail from '@/app/_components/contact-email';

const resend = new Resend(env.RESEND_API_KEY);
interface ReqData {
    email: string;
    firstName: string;
    lastName: string;
    subject: string;
    message: string;
}

export async function POST(req: NextRequest) {
    const reqData = await req.json() as ReqData;
    try {
        const { data, error } = await resend.emails.send({
            from: 'Sparktup <contact@resend.dev>',
            to: "xanthan.ex@gmail.com",
            subject: 'Contact Request: ' + reqData.subject,
            react: ContactEmail({ email: reqData.email, firstName: reqData.firstName, lastName: reqData.lastName, message: reqData.message }),
        });
        if (error) {
            console.log(error);
            return NextResponse.json({ error });
        }
        return NextResponse.json(data);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }
}


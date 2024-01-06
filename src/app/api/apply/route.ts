import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { Resend } from 'resend';
import { env } from "@/env.mjs";
import ApplyEmail from '@/app/_components/apply-email';

const resend = new Resend(env.RESEND_API_KEY);
interface ReqData {
    job: string;
}

export async function POST(req: NextRequest) {
    const reqData = await req.json() as ReqData;
    try {
        const { data, error } = await resend.emails.send({
            from: 'Sparktup <contact@resend.dev>',
            to: "xanthan.ex@gmail.com",
            subject: 'New Application Submission!',
            react: ApplyEmail({job: reqData.job}),
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


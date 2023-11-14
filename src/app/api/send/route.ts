// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend('re_MFVDVjeC_MR9Yvzgi1PRoW7kwDDHRtCdq');

export async function POST() {
    try {
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>',
            to: ['xanthan.ex@gmail.com'],
            subject: 'Hello world',
            react: '<p>Congrats on sending your <strong>first email</strong>!</p>',
        });
        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ error });
    }
}

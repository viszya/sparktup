// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import VercelInviteUserEmail from '@/app/_components/email-template';

const resend = new Resend('re_MFVDVjeC_MR9Yvzgi1PRoW7kwDDHRtCdq');

export async function GET() {
    try {
        const { data, error } = await resend.emails.send({
            from: 'Sparktup <onboarding@resend.dev>',
            to: ['xanthan.ex@gmail.com'],
            subject: 'Welcome to Sparktup! Here is your verification code.',
            react: VercelInviteUserEmail(),
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
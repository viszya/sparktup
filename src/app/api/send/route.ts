// import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import { env } from "@/env.mjs";
import VercelInviteUserEmail from '@/app/_components/email-template';

const resend = new Resend(env.RESEND_API_KEY);

export async function POST(req: Request) {
    // const headersList = headers();
    //const referer = headersList.get("body");
    console.log("HIHIHIHIHII@@@");
    // console.log(headersList);

    

    //console.log({ headersList, referer });
    
    try {
        const r = await req.json();
        const { data, error } = await resend.emails.send({
            from: 'Sparktup <onboarding@resend.dev>',
            to: "xanthan.mx@gmail.com", 
            subject: 'Contact Request: ' + r.body.subject,
            react: VercelInviteUserEmail(),
        });
        if (error) {
            console.log(error);
            return NextResponse.json({ error });
        }
        return NextResponse.json(data, r);
    } catch (error) {
        console.log(error);
        return NextResponse.json({ error });
    }

    //   return new Response(JSON.stringify({ message: "test" }), {
    //     status: 200,
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   });


}


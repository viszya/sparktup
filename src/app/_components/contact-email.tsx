import {
    Body,
    Container,
    Head,
    Html,
    Link,
    Preview,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface ContactRequestEmailProps {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
  }
  
  export function ContactRequestEmail({ firstName, lastName, email, message }: ContactRequestEmailProps) {
  
    const previewText = `Contact Request from ${firstName} ${lastName}`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Text className="text-black text-[14px] leading-[24px]">
                Hello Team,
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                You have received a contact request from: {firstName} {lastName}
                ({' '}
                <Link
                  href={`mailto:${email}`}
                  className="text-blue-600 no-underline"
                >
                  {email}
                </Link>
                ) regarding Spartkup Contact Form.
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <span className='font-semibold'>Message:</span> {message}
              </Text>
              <Text className="text-black text-[14px] leading-[24px] mt-[32px]">
                Please respond to this email to follow up with the user.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default ContactRequestEmail;
  
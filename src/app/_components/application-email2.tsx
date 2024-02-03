import {
  Body,
  Container,
  Head,
  Html,
  Tailwind,
  Text,
} from '@react-email/components';
import * as React from 'react';

interface EmailProps {
  message: string;
}

export function RejectedApplicationEmail({ message }: EmailProps) {
  return (
      <Html>
          <Head />
          <Tailwind>
              <Body className="bg-white my-auto mx-auto font-sans">
                  <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                      <Text className="text-black text-[14px] leading-[24px]">
                          Hello Applicant,
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                          We regret to inform you that your application for the following position has been unsuccessful:
                      </Text>
                      {/* <Text className="text-black text-[14px] leading-[24px]">
                          <span className='font-semibold'>Job Position:</span> {job}
                      </Text> */}
                      <Text className="text-black text-[14px] leading-[24px] mt-[16px]">
                          Feedback from the company:
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                          {message}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px] mt-[32px]">
                          We appreciate your interest and wish you the best in your job search.
                      </Text>
                  </Container>
              </Body>
          </Tailwind>
      </Html>
  );
};

export default RejectedApplicationEmail;

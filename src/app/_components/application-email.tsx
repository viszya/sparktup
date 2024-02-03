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

interface EmailProps {
  message: string;
}

export function AcceptedApplicationEmail({ message }: EmailProps) {
  return (
      <Html>
          <Head />
          <Tailwind>
              <Body className="bg-white my-auto mx-auto font-sans">
                  <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
                      <Text className="text-black text-[14px] leading-[24px]">
                          Hello Team,
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px]">
                          Congratulations! An application for the following position has been accepted:
                      </Text>
                      {/* <Text className="text-black text-[14px] leading-[24px]">
                          <span className='font-semibold'>Job Position:</span> {job}
                      </Text> */}
                      <Text className="text-black text-[14px] leading-[24px] mt-[16px]">
                          Feedback from the company:
                      </Text>
                      <Text className="text-black text-[14px] font-bold leading-[24px]">
                          {message}
                      </Text>
                      <Text className="text-black text-[14px] leading-[24px] mt-[32px]">
                          Please check your dashboard to follow up with the application.
                      </Text>
                  </Container>
              </Body>
          </Tailwind>
      </Html>
  );
};

export default AcceptedApplicationEmail;

import {
    Body,
    Button,
    Container,
    Column,
    Head,
    Heading,
    Hr,
    Html,
    Img,
    Link,
    Preview,
    Row,
    Section,
    Tailwind,
    Text,
  } from '@react-email/components';
  import * as React from 'react';
  
  interface VercelInviteUserEmailProps {
    username?: string;
    userImage?: string;
    invitedByUsername?: string;
    invitedByEmail?: string;
    teamName?: string;
    teamImage?: string;
    inviteLink?: string;
    inviteFromIp?: string;
    inviteFromLocation?: string;
  } 
  
  const baseUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : '';

  const data = {
    username: 'zenorocha',
    userImage: `${baseUrl}/static/vercel-user.png`,
    invitedByUsername: 'bukinoshita',
    invitedByEmail: 'bukinoshita@example.com',
    teamName: 'My Project',
    teamImage:`${baseUrl}/static/vercel-team.png`,
    inviteLink: 'https://vercel.com/teams/invite/foo',
    inviteFromIp: '204.13.186.218',
    inviteFromLocation: 'São Paulo, Brazil',
  }
  
 
  
  export const VercelInviteUserEmail = () => {
    const previewText = `Join ${data.invitedByUsername} on Vercel`;
  
    return (
      <Html>
        <Head />
        <Preview>{previewText}</Preview>
        <Tailwind>
          <Body className="bg-white my-auto mx-auto font-sans">
            <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] w-[465px]">
              <Section className="mt-[32px]">
                <Img
                  src={`${baseUrl}/static/vercel-logo.png`}
                  width="40"
                  height="37"
                  alt="Vercel"
                  className="my-0 mx-auto"
                />
              </Section>
              <Heading className="text-black text-[24px] font-normal text-center p-0 my-[30px] mx-0">
                Join <strong>{data.teamName}</strong> on <strong>Vercel</strong>
              </Heading>
              <Text className="text-black text-[14px] leading-[24px]">
                Hello {data.username},
              </Text>
              <Text className="text-black text-[14px] leading-[24px]">
                <strong>bukinoshita</strong> (
                <Link
                  href={`mailto:${data.invitedByEmail}`}
                  className="text-blue-600 no-underline"
                >
                  {data.invitedByEmail}
                </Link>
                ) has invited you to the <strong>{data.teamName}</strong> team on{' '}
                <strong>Vercel</strong>.
              </Text>
              <Section>
                <Row>
                  <Column align="right">
                    <Img className="rounded-full" src={data.userImage} width="64" height="64" />
                  </Column>
                  <Column align="center">
                    <Img
                      src={`${baseUrl}/static/vercel-arrow.png`}
                      width="12"
                      height="9"
                      alt="invited you to"
                    />
                  </Column>
                  <Column align="left">
                    <Img className="rounded-full" src={data.teamImage} width="64" height="64" />
                  </Column>
                </Row>
              </Section>
              <Section className="text-center mt-[32px] mb-[32px]">
                <Button
                  className="bg-[#000000] rounded text-white text-[12px] font-semibold no-underline text-center"
                  href={data.inviteLink}
                >
                  Join the team
                </Button>
              </Section>
              <Text className="text-black text-[14px] leading-[24px]">
                or copy and paste this URL into your browser:{' '}
                <Link
                  href={data.inviteLink}
                  className="text-blue-600 no-underline"
                >
                  {data.inviteLink}
                </Link>
              </Text>
              <Hr className="border border-solid border-[#eaeaea] my-[26px] mx-0 w-full" />
              <Text className="text-[#666666] text-[12px] leading-[24px]">
                This invitation was intended for{' '}
                <span className="text-black">{data.username} </span>.This invite was sent from{' '}
                <span className="text-black">{data.inviteFromIp}</span> located in{' '}
                <span className="text-black">{data.inviteFromLocation}</span>. If you were not
                expecting this invitation, you can ignore this email. If you are
                concerned about your account's safety, please reply to this email to
                get in touch with us.
              </Text>
            </Container>
          </Body>
        </Tailwind>
      </Html>
    );
  };
  
  export default VercelInviteUserEmail;
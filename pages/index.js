import Head from 'next/head';
import { useAuth } from '@/lib/auth'
import { Button, Heading, Flex } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth();

  return (
    <div>
    <Flex as='main' direction='column' align='center' justify='center' h='100vh'>
      <Head>
      <script
          dangerouslySetInnerHTML={{
            __html: `
          if (document.cookie && document.cookie.includes('fast-feedback-auth')) {
            window.location.href = "/dashboard"
          }
        `,
          }}
        />
        <title>Fast Feedback</title>
      </Head>
      <Heading>
        Fast Feedback
      </Heading>

      {auth.user ? (
        // <Button mt={4} onClick={e => auth.signOut()}>Sign Out</Button>
        <Button as='a' size='sm' fontWeight='medium' href='/dashboard' mt={2}>View Dashboard</Button>
      ) : (
        <Button mt={4} onClick={e => auth.signinWithGithub()}>Sign In</Button>
      )}
    </Flex>
    </div>
  )
}
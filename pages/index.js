import Head from 'next/head';
import { useAuth } from '@/lib/auth'
import { Button, Heading, Text, Code, Flex } from '@chakra-ui/react'

export default function Home() {
  const auth = useAuth();

  return (
    <div>
    <Flex as='main' direction='column' align='center' justify='center' h='100vh'>
      <Head>
        <title>Fast Feedback</title>
      </Head>
      <Heading>
        Fast Feedback
      </Heading>

      <Text>
        Current user: <Code>{auth.user ? auth.user.email : 'None'}</Code>
      </Text>

      {auth.user ? (
        <Button mt={4} onClick={e => auth.signOut()}>Sign Out</Button>
      ) : (
        <Button mt={4} onClick={e => auth.signinWithGithub()}>Sign In</Button>
      )}
    </Flex>
    </div>
  )
}
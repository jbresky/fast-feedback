import React from 'react'
import {
  Flex,
  Link,
  Box,
  Icon,
  Avatar,
  Button
} from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {
  const { user } = useAuth()

  const auth = useAuth();
  return (
    <Box backgroundColor="gray.100" h="100vh">
      <Flex
        backgroundColor="white"
        mb={[8, 16]}
        w="full"
        borderTop="5px solid #0AF5F4"
      >
        <Flex
          alignItems="center"
          justifyContent="space-between"
          pt={4}
          pb={4}
          maxW="1250px"
          margin="0 auto"
          w="full"
          px={8}
          h="60px"
        >
          <Flex align="center">
            {/* <NextLink href="/" passHref> */}
            <Link>
              <Icon name="logo" size="24px" mr={8} />
            </Link>
            {/* </NextLink> */}
            {/* <NextLink href="/sites" passHref> */}
            <Link mr={4}>Sites</Link>
            {/* </NextLink> */}
            {/* <NextLink href="/feedback" passHref> */}
            <Link>Feedback</Link>
            {/* </NextLink> */}
          </Flex>
          <Flex justifyContent="center" alignItems="center">
            {/* <NextLink href="/account" passHref> */}
            {user && (
              <Link>
                <Button variant='ghost' mr={2} onClick={() => auth.signOut()}>
                  Log Out
                </Button>
              </Link>
            )}
            <Link>
              <Avatar size="sm" src={user?.photoUrl} />
            </Link>

            {/* </NextLink> */}
          </Flex>
        </Flex>
      </Flex>
      <Flex margin="0 auto" direction="column" maxW="1250px" px={[0, 8, 8]}>
        {children}
      </Flex>
      {/* <Footer /> */}
    </Box>
  )
}

export default DashboardShell
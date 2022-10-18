import React from 'react'
import {
  Flex,
  Link,
  Box,
  Stack,
  Avatar,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import { useAuth } from '@/lib/auth'

const DashboardShell = ({ children }) => {

  const auth = useAuth();
  return (
    <Flex flexDirection="column">
      <Flex
        flexDirection="row"
        backgroundColor="whiteAlpha.900"
        justifyContent="space-between"
        alignItems="center"
        p={4}
        height='100%'
      >
        <Stack
          spacing={4}
          isInline
          justifyContent="center"
          alignItems="center"
          flexDirection="row-reverse"
        >
          <Link ml={4}>Sites</Link>
          <Link>Feedback</Link>
        </Stack>
        {/* <Box display="flex" justifyContent="center" alignItems="center"> */}
        <Flex alignItems='center'>
          <Link mr={4}>Account</Link>
          <Avatar size="sm" src={auth.user.photoUrl} />
        </Flex>
        {/* </Box> */}
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          maxWidth="900px"
          w='100%'
          ml="auto"
          mr="auto"
        >
          <Breadcrumb>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink>Sites /</BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
          <Heading size="xl" as="h2">
            Sites
          </Heading>
          {children}
        </Flex>
      </Flex>
    </Flex>
  )
}

export default DashboardShell
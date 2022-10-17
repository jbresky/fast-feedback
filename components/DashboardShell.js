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

const DashboardShell = () => (
    <Flex flexDirection="column">
      <Flex
        flexDirection="row"
        backgroundColor="whiteAlpha.900"
        justifyContent="space-between"
        alignItems="center"
        p={4}
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
        <Box display="flex" justifyContent="center" alignItems="center">
          <Link mr={4}>Account</Link>
          <Avatar size="sm" />
        </Box>
      </Flex>
      <Flex backgroundColor="gray.100" p={8} height="100%">
        <Flex
          flexDirection="column"
          justifyContent="center"
          maxWidth="800px"
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
          <Box backgroundColor="white" width="100%" borderRadius={4} p={8}>
            <Heading size="md" as="h2">
              Get feedback on your site instantly
            </Heading>
            <Text>Start today, then grow with us!</Text>
            <Button variant="solid" size="md">
              Upgrade to Starter
            </Button>
          </Box>
        </Flex>
      </Flex>
    </Flex>
)

export default DashboardShell
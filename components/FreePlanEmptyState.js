import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const FreePlanEmptyState = () => (
    <DashboardShell>
         <Box backgroundColor="white" width="100%" borderRadius={4} p={8}>
            <Heading size="md" as="h2">
              Get feedback on your site instantly
            </Heading>
            <Text>Start today, then grow with us!</Text>
            <Button variant="solid" size="md">
              Upgrade to Starter
            </Button>
          </Box>
    </DashboardShell>
)

export default FreePlanEmptyState
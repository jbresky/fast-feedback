import React from 'react'
import {
  Box,
  Heading,
  Text,
  Button
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'

const EmptyState = () => (
    <DashboardShell>
         <Box backgroundColor="white" width="100%" borderRadius={4} p={8}>
            <Heading size="md" as="h2">
              You haven&apost added any sites
            </Heading>
            <Text>Welcome! Let&aposs get started,</Text>
            <Button variant="solid" size="md">
              Add your First Site
            </Button>
          </Box>
    </DashboardShell>
)

export default EmptyState
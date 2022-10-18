import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import DashboardShell from './DashboardShell'
import AddSiteModal from './AddSiteModal'

const apos = `'`

const EmptyState = () => (
    <DashboardShell>
        {/* <Box backgroundColor="white" width="100%" borderRadius={4} p={8} mt={3}> */}
        <Flex
            width='100%'
            backgroundColor="white"
            borderRadius={8}
            p={16}
            align='center'
            direction='column'
        >
            <Heading size="md" as="h2" p={2}>
                You haven{apos}t added any sites
            </Heading>
            <Text mb={4}>Let{apos}s get started</Text>
            <AddSiteModal />
        </Flex>
        {/* </Box> */}
    </DashboardShell>
)

export default EmptyState
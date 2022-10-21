import React from 'react'
import {
    Box,
    Flex,
    Heading,
    Text,
    Button
} from '@chakra-ui/react'
import AddSiteModal from './AddSiteModal'

const apos = `'`

const EmptyState = () => (
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
            <AddSiteModal>+ Add Site</AddSiteModal>
        </Flex>
)

export default EmptyState